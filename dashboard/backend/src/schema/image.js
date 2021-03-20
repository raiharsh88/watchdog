const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema(
  {
    time: Number,
    camId: String,
    url: String,
    imgId: String,
    email: String,
    meta: { Object },
  },
  { strict: false }
);

const Image = mongoose.model("images", imageSchema);

module.exports = { Image };
