const express = require("express");
const path = require("path");
const db = require("./backend/database/index.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const course = require("./backend/routes/courses");
const app = express();
const student = require("./backend/routes/students");
const teacher = require("./backend/routes/teachers");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(`../dist/eduzone`));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "../dist/eduzone/index.html"));
});

app.use("/course", course);
app.use("/student", student);
app.use("/teacher", teacher);
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`listening at port at http://localhost:${port}`);
});
