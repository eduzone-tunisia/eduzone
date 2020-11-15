const router = require("express").Router();
const Student = require("../database/models/student");
const Joi = require("joi");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verify = require("./verifyToken.js");
const dotenv = require("dotenv");
dotenv.config();

//getting all students
router.get("/", async (req, res) => {
  await Student.find({}, (err, data) => {
    res.json(data);
  });
});

//validation for registration of a student
const schema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required(),
  phoneNumber: Joi.number(),
  dateOfBirth: Joi.date(),
  imageUrl: Joi.string(),
});

//create a student
router.post("/add", async (req, res, next) => {
  console.log(req.body);
  //check if student exists
  const emailExist = await Student.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("email already exists");
  try {
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newStudent = new Student({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
      phoneNumber: req.body.phoneNumber,
      dateOfBirth: req.body.dateOfBirth,
      imageUrl: req.body.imageUrl,
    });

    const { error } = await schema.validateAsync(req.body);
    const savedStudent = await newStudent.save();
    res.send(savedStudent);
  } catch (error) {
    if (error.isJoi === true) res.status(400).send(error.details[0].message);
    next(error);
  }
});

//validation for student login

const loginschema = Joi.object({
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required(),
});

// login for student
router.post("/login", async (req, res, next) => {
  console.log(req.body);
  //check if student already exist
  try {
    const { error } = await loginschema.validateAsync(req.body);
    const student = await Student.findOne({ email: req.body.email });
    if (!student) return res.status(400).send("Email or password is wrong");

    //check password
    const validPass = await bcrypt.compare(req.body.password, student.password);
    if (!validPass) return res.status(400).send("password not valid");

    //create and assign a token
    console.log(process.env.SECRET_TOKEN);
    const token = jwt.sign({ _id: student._id }, process.env.SECRET_TOKEN);
    res.header("auth-token", token).send({ token: token, id: student.id });
  } catch (error) {
    if (error.isJoi === true) res.status(400).send(error.details[0].message);
    next(error);
  }
});

//update a student
router.put("/:id", async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "specific data updated" });
});

module.exports = router;
