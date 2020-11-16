const router = require("express").Router();
const cours = require("../database/models/course");
const Teacher = require("../database/models/teacher");
// get all courses in the database
router.get("/", async (req, res) => {
  const courses = await cours.find().populate("teacher");
  res.json(courses);
});

// add new couses in the database
router.post("/addCourse", async (req, res) => {
  console.log(req.body);
  const {
    teacher,
    title,
    description,
    videoUrl,
    price,
    numberOfViews,
    sections,
  } = req.body;

  const newCourse = new cours({
    teacher,
    title,
    description,
    videoUrl,
    price,
    numberOfViews,
    sections,
  });

  const newCourseAdded = await newCourse.save();
  console.log("cours", newCourseAdded);

  res.send(newCourseAdded);
});
module.exports = router;
