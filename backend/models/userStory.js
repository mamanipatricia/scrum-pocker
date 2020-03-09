const mongoose = require("mongoose");
mongoose.set("debug", true);

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    default: ""
  }
});

const userStory = new mongoose.model("userStories", schema);

module.exports = userStory;
