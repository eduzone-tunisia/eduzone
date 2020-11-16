const router = require("express").Router();
const Course = require("../database/models/course");

//get all courses

router.get("/", async (req, res) => {
  await Course.find({}, (err, data) => {
    res.json(data);
  });
});

// get courses in the database by teacher
router.post("/getCourses", async (req, res) => {
  console.log(req.body);
  const courses = await Course.find({ teacher: req.body.teacherId })
    .populate("teacher")
    .exec();
  console.log(courses);
  res.send(courses);
});

// add new couses in the database
router.post("/addCourse", async (req, res) => {
  const {
    teacher,
    title,
    description,
    videoUrl,
    price,
    numberOfViews,
    sections,
  } = req.body;

  const newCourse = new Course({
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
