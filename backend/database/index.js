const mongoose = require("mongoose");
const url = "mongodb://localhost/eduzone";
//mongodb://localhost/eduzone
//mongodb+srv://oussamaheni:oussama23146875@eduzone.blopr.mongodb.net/eduzone?retryWrites=true&w=majority
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on("error", () => {
  console.log("mongoose connection error");
});

db.once("open", () => {
  console.log("mongoose connected successfully");
});
