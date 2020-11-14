const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
   
    description: {
      type: String,
      required: true
    },
    videoUrl: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    numberOfViews: {
      type: Number,
      required: false,
      default: 0
    },
    sections: [{
      title: {
        type: String,
        required: true
      },
   
    }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("course", courseSchema);
