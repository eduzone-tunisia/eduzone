const express = require("express");
const path = require("path");
const db = require("./database/index.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const fileupload = require("express-fileupload")
const course = require("./routes/courses");
const app = express();
const student = require("./routes/students");
const teacher = require("./routes/teachers");
const cloudinary = require('cloudinary').v2;
app.use(fileupload())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(`../eduzone/dist/eduzone`));
//  app.use(fileupload())

cloudinary.config({
  cloud_name: 'dxg5qywkt',
  api_key: '588828191331743',
  api_secret: '_ULtjv0vM7MuZ30m2tPja2a1Oe4'
})

app.use("/course", course);
app.use("/student", student);
app.use("/teacher", teacher);
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`listening at port at http://localhost:${port}`);
});
