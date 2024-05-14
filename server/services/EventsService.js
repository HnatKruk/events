const EventSchema = require('../schemas/event-schema');
const ParticipantSchema = require('../schemas/participant-schema');

class EventsService {
  async getAllEvents(page = 1, sortBy = 'title', sortOrder = 'asc') {
    const pageSize = 20;
    const skip = (parseInt(page) - 1) * pageSize;
    let sortOptions = {};
    
    if (sortBy && sortOrder) {
      sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1;
    }

    const totalEvents = await EventSchema.countDocuments();
    const events = await EventSchema.find().sort(sortOptions).skip(skip).limit(pageSize);

    return { events, totalEvents, nextPage: parseInt(page) + 1, pageSize };
  }

  async getEvent(id, searchBy = '', searchValue = '') {
    const query = {};
    if (searchValue && searchBy) {
      query[searchBy] = { $regex: searchValue, $options: 'i' };
    }

    const event = await EventSchema.findById(id).populate({ path: 'participants', match: query, });

    if (!event) {
      throw new Error('Event is not exist');
    }

    return event;
  }

  async addParticipant(eventId, participantId) {
    const event = await EventSchema.findById(eventId);
    const participant = await ParticipantSchema.findById(participantId);

    if (!event) {
      throw new Error('Event is not exist');
    }

    if (!participant) {
      throw new Error('Participant is not exist');
    }

    if (event.participants.includes(participantId)) {
      throw new Error('Participant is already added to the event');
    }

    event.participants.push(participantId);
    await event.save();

    return event;
  }
}

module.exports = new EventsService();