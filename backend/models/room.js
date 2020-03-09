const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
    unique: true
  },
  totalVotes: {
    type: String,
    default: ""
  },
  // userStory: {
  //   type: Schema.ObjectId,
  //   ref: "userStory"
  // },
  members: {
    type: Array
  }
});

const room = new mongoose.model("room", schema);

module.exports = room;
