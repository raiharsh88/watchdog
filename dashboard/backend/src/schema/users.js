const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const user = {
  name: String,
  email: String,
  phone: String,
  role: String,
  parent: String,
  subs: [String],
  password: String,
  lastSeen: String,
  since: String,
};

const temporary = {
  email: String,
  since: String,
  uuid: String,
  attempt: Number,
  otp: String,
};

const userSchema = new Schema(user, { strict: false });
const tempoprarySchema = new Schema(temporary);

const User = mongoose.model("users", userSchema);
const Temporary = mongoose.model("temporary", tempoprarySchema);

module.exports = { User, Temporary };
