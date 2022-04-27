const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "name should be provided"],
    trim: true,
    maxlength: [50, "name maximum should not go beyond 50 characters"],
  },
  userName: {
    type: String,
    require: [true, "UserName should be provided"],
    trim: true,
    maxlength: [50, "UserName maximum should not go beyond 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },

  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: 6,
    select: false,
  },
  role: {
    type: String,
    enum: ["admin", "receptionist", "manager", "financeManager", "supervisor"],
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createdAt: {
    type: Date,
    default: Date.now(),
    required: true,
  },
});
//HASHING PASSWORD
User.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
//CREATING JWT
User.methods.getSignedJWT = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};
//PASSWORD COMPARE
User.methods.comparePassword = async function (enterdPassword) {
  return bcrypt.compare(enterdPassword, this.password);
};
module.exports = mongoose.model("user", User);
