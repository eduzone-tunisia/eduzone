const express = require("express");
const path = require("path");
const db = require("./database/index.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const fileupload = require("express-fileupload")
const course = require("./routes/courses");
const file = require("./routes/upload");
const app = express();

const student = require("./routes/students");
const teacher = require("./routes/teachers");
const cloudinary = require('cloudinary');
const dotenv = require('dotenv');
dotenv.config();
 app.use(fileupload({
   useTempFiles:true,
 }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(`../dist/eduzone`));



app.use("/file",file)
app.use("/course", course);
app.use("/student", student);
app.use("/teacher", teacher);
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`listening at port at http://localhost:${port}`);
});
