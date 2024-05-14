const mongoose = require('mongoose');
const { seedData } = require('./seedData.js');
require('dotenv').config();

const DB_URL = process.env.DB_URL;

async function databaseConnect() {
  try {
    await mongoose.connect(DB_URL);
    console.log('Database connected successfully');
    await seedData();
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
}

module.exports = { databaseConnect };
