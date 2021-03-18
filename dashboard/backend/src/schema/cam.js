const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const camSchema = new Schema({
  camId: String,
  time: Number,
  lastSeen: Number,
  email: String,
  meta: {
    location: {
      lat: String,
      lon: String,
      text: String,
    },
  },
});

const Cam = mongoose.model("cam", camSchema);

module.exports = { Cam };
