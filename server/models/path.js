const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const pathSchema = mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  trip: {
    type: Schema.Types.ObjectId,
    ref: "Trip",
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
  order: {
    type: Number,
  },
});

module.exports = mongoose.model("Path", pathSchema, "paths");
