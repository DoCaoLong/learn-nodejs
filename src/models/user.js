const mongoose = require("mongoose");

// tạo ra hình thù
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  city: String,
});

// lưu xuống db
const User = mongoose.model("user", userSchema);

module.exports = User;
