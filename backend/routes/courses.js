const router = require("express").Router();
const Course = require("../database/models/course");
const cloudinary = require('cloudinary').v2;
//get all courses

router.get("/", async (req, res) => {
  await Course.find({}, (err, data) => {
    res.json(data);
  });
});

router.get("/", async (req, res)=>{
  res.status(200).send('Hello world')
})

// get courses in the database by teacher
router.post("/getCourses", async (req, res) => {
  console.log(req.body);
  const courses = await Course.find({ teacher: req.body.teacherId })
    .populate("teacher")
    .exec();
  console.log(courses);
  res.json(courses);
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


router.post("/upload", async (req, res,next) => {
  const file = req.files.photo
  // console.log(file);
cloudinary.uploader.upload(file.tempFilePath,(err,result) => {
  // console.log("Error",err);
  // console.log("Resulet",result);
  res.send(result)
})
  // res.send({ 
  //   success:true,
  //   message:"video uploaded !"
  // })
})
module.exports = router;
