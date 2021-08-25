const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  inProgress: {
    type: Boolean
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  dateStarted: {
    type: Date,
    default: Date.now
  },
  dateFinished: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('trip', tripSchema, 'trips');
