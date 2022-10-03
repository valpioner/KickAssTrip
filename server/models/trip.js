const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const tripSchema = mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  paths: [
    {
      name: {
        type: String,
      },
      type: {
        type: String,
        enum: ["ground", "air", "water"],
        default: "ground",
        required: true,
      },
      waypoints: [
        {
          lat: {
            type: Number,
            required: true,
          },
          lng: {
            type: Number,
            required: true,
          },
        },
      ],
    },
  ],
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Trip", tripSchema, "trips");
