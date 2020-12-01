const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teacher = new Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
  },
  imageUrl: {
    type: String,
  },
  balance: {
    type: Number,
    required: false,
    default: 0,
  },
  experience: {
    type: String,
  },
});
module.exports = mongoose.model("teacher", teacher);
