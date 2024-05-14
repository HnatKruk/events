const { validationResult } = require('express-validator');
const EventsService = require('../services/EventsService');
const ParticipantsService = require('../services/ParticipantsService');

class EventsController {
  async getAllEvents(req, res, next) {
    try {
      const { page, sortBy, sortOrder } = req.query;
      const events = await EventsService.getAllEvents(page, sortBy, sortOrder);
      res.status(200).json(events)
    } catch (e) {
      next(e);
    }
  }

  async getEvent(req, res, next) {
    try {
      const { params: { id }, query: { searchBy, searchValue } } = req;
      const event = await EventsService.getEvent(id, searchBy, searchValue);
      res.status(200).json(event)
    } catch (e) {
      next(e);
    }
  }

  async createAndAddParticipantToEvent(req, res, next) {
    try {
      const { params: { id }, body } = req;

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const participant = await ParticipantsService.createParticipant(body);
      const event = await EventsService.addParticipant(id, participant._id);
      res.status(200).json(event)
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new EventsController();