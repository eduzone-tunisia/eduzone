const router = require("express").Router();
const Teacher = require("../database/models/teacher");
const Joi = require("joi");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verify = require("./verifyToken.js");
const dotenv = require("dotenv");
dotenv.config();

//getting all Teachers
router.get("/", async (req, res) => {
  await Teacher.find({}, (err, data) => {
    res.json(data);
  });
});

//validation for registration of a Teacher
const schema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required(),
  phoneNumber: Joi.number(),
  dateOfBirth: Joi.date(),
  imageUrl: Joi.string(),
  experience: Joi.string(),
});

//create a Teacher
router.post("/add", async (req, res, next) => {
  console.log(req.body);
  //check if Teacher exists
  const emailExist = await Teacher.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("email already exists");
  try {
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newTeacher = new Teacher({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
      phoneNumber: req.body.phoneNumber,
      dateOfBirth: req.body.dateOfBirth,
      imageUrl: req.body.imageUrl,
    });

    const { error } = await schema.validateAsync(req.body);
    const savedTeacher = await newTeacher.save();
    res.send(savedTeacher);
  } catch (error) {
    if (error.isJoi === true) res.status(400).send(error.details[0].message);
    next(error);
  }
});

//validation for Teacher login

const loginschema = Joi.object({
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required(),
});

// login for Teacher
router.post("/login", async (req, res, next) => {
  console.log(req.body);
  //check if Teacher already exist
  try {
    const { error } = await loginschema.validateAsync(req.body);
    const teacher = await Teacher.findOne({ email: req.body.email });
    if (!teacher) return res.status(400).send("Email or password is wrong");

    //check password
    const validPass = await bcrypt.compare(req.body.password, teacher.password);
    if (!validPass) return res.status(400).send("password not valid");

    //create and assign a token
    console.log(process.env.SECRET_TOKEN);
    const token = jwt.sign({ _id: teacher._id }, process.env.SECRET_TOKEN);
    res.header("auth-token", token).send({ token: token, id: teacher.id });
  } catch (error) {
    if (error.isJoi === true) res.status(400).send(error.details[0].message);
    next(error);
  }
});

//update a Teacher
router.put("/:id", async (req, res) => {
  await Teacher.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "specific data updated" });
});

module.exports = router;
