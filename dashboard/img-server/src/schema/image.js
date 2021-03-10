const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  time: Number,
  name: String,
});
