const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const student = new Schema({
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
  videos: [
    {
      type: Schema.Types.ObjectId,
      ref: "course",
    },
  ],
});
module.exports = mongoose.model("student", student);
