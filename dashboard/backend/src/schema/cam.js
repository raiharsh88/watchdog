const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const camSchema = new Schema({
  camId: String,
  time: Number,
  lastUpdate: Number,
  meta: {
    location: {
      lat: Number,
      lon: Number,
      text: String,
    },
  },
});

const Cam = mongoose.model("cam", camSchema);

module.exports = { Cam };
