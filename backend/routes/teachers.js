const router = require("express").Router();
const Teacher = require("../database/models/teacher");
const cours = require("../database/models/course");
const Joi = require("joi");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verify = require("./verifyToken.js");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

dotenv.config();

//getting one teacher
router.get("/:id", async (req, res) => {
  const teacher = await Teacher.findById(req.params.id);
  res.json(teacher);
});

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
  balance: Joi.number(),
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
    ///send mail to teacher after sign up
    nodemailer.createTestAccount((err, email) => {
      var transporter = nodemailer.createTransport(
        smtpTransport({
          service: "gmail",
          port: 465,
          secure: false,
          host: "smtp.gmail.com",
          auth: {
            user: "Eduzone.Tunisia@gmail.com",
            pass: "eduzone12112020",
          },
          tls: {
            rejectUnauthorized: false,
          },
        })
      );

      let mailOptions = {
        from: "Eduzone.Tunisia@gmail.com",
        to: `${req.body.email}`,
        subject: "eduZone Application",
        text: `welcome ${req.body.lastName} ${req.body.firstName},

          Congratulation! you've successfuliy signed up for eduZone.
          Now it's time to access your account so you can start uploading your courses online.
          
          -Sign in to your account at : http://localhost:8080/teacherLogin
          -Access to your account.
          -Upload your courses on video format.
          -Check your balance.
          -check your comments and answer to possible questions.

          We're delighted to welcome you to eduZone.
          
          See you online.
          The eduZone team.`,
      };
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.log(err);
        }
      });
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

    const token = jwt.sign({ _id: teacher._id }, "123456");
    res.header("auth-token", token).send({ token: token, id: teacher.id });
  } catch (error) {
    if (error.isJoi === true) res.status(400).send(error.details[0].message);
    next(error);
  }
});

//update a Teacher
router.put("/:id", async (req, res) => {
  console.log(req.body);
  //check if email exists
  const emailExist = await Teacher.findOne({ email: req.body.email });
  if (!emailExist) return res.status(400).send("email doesn't exist");
  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const newInfo = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPassword,
    phoneNumber: req.body.phoneNumber,
    dateOfBirth: req.body.dateOfBirth,
    imageUrl: req.body.imageUrl,
  };
  await Teacher.findByIdAndUpdate(req.params.id, newInfo);

  res.json({ message: "teacher updated" });
});

router.put("/balance/:id", async (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  const updatedteacher = {
    balance: req.body.balance,
  };
  await Teacher.findByIdAndUpdate(req.params.id, updatedteacher);
  res.json("teacher  updated");
});
module.exports = router;
