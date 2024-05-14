const ParticipantSchema = require('../schemas/participant-schema');

class ParticipantService {
  async createParticipant(data) {
    const participant = await ParticipantSchema.create(data);
    return participant;
  }
}

module.exports = new ParticipantService();