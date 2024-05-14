const { Schema, model } = require('mongoose');

const EventSchema = new Schema({
  title: { type: String, default: 'Title' },
  description: { type: String, default: 'Description' },
  organizer: { type: String, required: true },
  eventDate: { type: Date, required: true },
  participants: [{ type: Schema.Types.ObjectId, ref: 'Participant' }],
});

module.exports = model('Event', EventSchema);
