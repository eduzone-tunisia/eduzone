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
  experience: {
    type: String,
  },

  videos: [
    {
      type: Schema.Types.ObjectId,
      ref: "course",
    },
  ],
});
module.exports = mongoose.model("teacher", teacher);
