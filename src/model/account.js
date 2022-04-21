const mongoose = require("mongoose");

const Account = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    unique: true,
    trim: true,
  },
  amount: {
    type: Number,
    required: [true, "amount is required"],
    trim: true,
  },
  currency: {
    type: String,
    required: [true, "curenncy is required"],
    trim: true,
  },
  description: {
    type: String,
    required: false,
    unique: false,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("account", Account);
