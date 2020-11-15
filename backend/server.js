const express = require("express");
const path = require("path");
const db = require("./database/index.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const student = require("./routes/students");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(`../eduzone/dist/eduzone`));
// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname + "../dist/eduzone/index.html"));
// });

const Course = require("./routes/courses");
app.use("/Course", Course);
app.use("/student", student);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`listening at port at http://localhost:${port}`);
});
