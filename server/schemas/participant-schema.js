const { Schema, model } = require('mongoose');

const ParticipantSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  eventSource: { type: String, required: false, default: null },
});

module.exports = model('Participant', ParticipantSchema);