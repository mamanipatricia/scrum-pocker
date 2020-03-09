const UserSchema = require("../models/user");

const listUsers = async () => {
  console.log("controlador");
  const user = await UserSchema.find().exec();
  console.table(user);
  return user;
};

module.exports = {
  listUsers
};
