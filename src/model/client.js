const mongoose = require("mongoose");

const Client = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "name should be provided"],
    trim: true,
    maxlength: [50, "name maximum should not go beyond 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: false,
  },
  phone: {
    type: String,
    require: [true, "Phone should be provided"],
    unique: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    required: true,
  },
});
module.exports = mongoose.model("client", Client);
