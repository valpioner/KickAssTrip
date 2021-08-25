const mongoose = require('mongoose');

const airPathSchema = mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  trip: {
    type: Schema.Types.ObjectId,
    required: 'trips'
  },
  waypoints: [
    {
      lat: {
        type: Number
      },
      lng: {
        type: Number
      }
    }
  ],
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('airPath', airPathSchema, 'airPathes');
