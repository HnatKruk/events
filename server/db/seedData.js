const MongoClient = require('mongodb').MongoClient;
const { faker } = require('@faker-js/faker');
require('dotenv').config();

async function seedData() {
  const DB_URL = process.env.DB_URL;
  const DB_NAME = process.env.DB_NAME;
  const DB_COLLECTION_NAME = process.env.DB_COLLECTION_NAME;
  const client = new MongoClient(DB_URL);

  try {
    await client.connect();
    const database = client.db(DB_NAME);
    const collection = database.collection(DB_COLLECTION_NAME);
    const countCollectionDocuments = await collection.countDocuments();

    if (countCollectionDocuments > 0) {
      return;
    }

    let events = [];
    for (let i = 0; i < 100; i++) {
      events.push({
        title: faker.person.jobTitle(),
        description: faker.lorem.paragraph(2),
        organizer: faker.person.fullName(),
        eventDate: faker.date.future(),
        participants: [],
      });
    }

    await collection.insertMany(events);
    console.log('Database seeded successfully');
  } catch (err) {
    console.error(err.stack);
  } finally {
    await client.close();
  }
}

module.exports = { seedData };
