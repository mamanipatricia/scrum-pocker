const mongoose = require("mongoose");

// We need to difine the URL
const URL = process.env.URL || "mongodb://157.245.218.13:27017/scrumpoker";
// const URL = process.env.URL || "mongodb://localhost:27017/scrumpoker";
// mongoose.connect('mongodb://localhost:157.245.218.13/scrumpoker')

mongoose.set("useCreateIndex", true);

// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set("useFindAndModify", false);

//Connection establishment
mongoose.connect(URL, {
  useNewUrlParser: true,
  useCreateIndex: true
});
//Models
// require('../model/user');
const db = mongoose.connection;

//We enebled the Listener
db.on("error", () => {
  console.error("Error occured in db connection");
});

db.on("open", () => {
  console.log("DB Connection established successfully");
});
