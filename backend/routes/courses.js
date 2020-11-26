const router = require("express").Router();
const Course = require("../database/models/course");

// cloudinary config :

//get all courses

router.get("/", async (req, res) => {
  await Course.find({}, (err, data) => {
    res.json(data);
  });
});

router.post("/getCourses", async (req, res) => {
  const courses = await Course.find({ teacher: req.body.teacherId })
    .populate("teacher")
    .exec();
  res.json(courses);
});

// add new couses in the database
router.post("/addCourse", async (req, res) => {
  const {
    teacher,
    title,
    description,
    videoUrl,
    imgUrl,
    price,
    numberOfViews,
    sections,
  } = req.body;

  const newCourse = new Course({
    teacher,
    title,
    description,
    videoUrl,
    imgUrl,
    price,
    numberOfViews,
    sections,
  });

  const newCourseAdded = await newCourse.save();
  console.log("cours", newCourseAdded);

  res.send(newCourseAdded);
});

router.put("/:id", async (req, res) => {
  await Course.findByIdAndUpdate(req.params.id,req.body)
  res.json('course updated')
})

module.exports = router;
