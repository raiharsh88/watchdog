const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  time: Number,
  name: String,
  meta: { Object },
});

const imageModel = mongoose.model("images", imageSchema);

module.exports = { imageModel };
