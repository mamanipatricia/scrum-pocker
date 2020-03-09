const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  vote: {
    type: Number
  },
  role: {
    type: Schema.ObjectId,
    ref: "role"
  }
});

const user = new mongoose.model("user", schema);

module.exports = user;
