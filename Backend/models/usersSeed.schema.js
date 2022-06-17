const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, required: [true, "Enter username"] },
  password: { type: String, required: [true, "Enter password"] },
  usercategory: { type: String, required: [true, "Select Category"] },
});

module.exports = mongoose.model("User", userSchema);
