const router = require("express").Router();
const Course = require("../database/models/course");

//get one course

router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  const course = await await Course.findById(req.params.id)
    .populate("teacher")
    .exec();
  res.json(course);
});

//get all courses

router.get("/", async (req, res) => {
  await Course.find({}, (err, data) => {
    return res.json(data);
  });
});

router.post("/getCourses", async (req, res) => {
  const courses = await Course.find({ teacher: req.body.teacherId })
    .populate("teacher")
    .exec();
  res.json(courses);
});

// router.get("/getBySection/:section", async (req, res) => {
//   const sections = req.params.section;
//   if(sections){
//     const courses = await Course.find({ sections })
//     res.json(courses)
//   }else{
//     return res.status(401).json({});
//   }

// });

// console.log(req.params);
// const courses = await Course.find({ category: req.body.teacherId })
//   .populate("teacher")
//   .exec();
// console.log(courses);
// res.json(courses);

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
  await Course.findByIdAndUpdate(req.params.id, req.body);
  res.json("course updated");
});

module.exports = router;
