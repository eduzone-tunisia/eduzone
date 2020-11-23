const router = require("express").Router();
require('dotenv').config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'dxg5qywkt',
    api_key: '588828191331743',
    api_secret: '_ULtjv0vM7MuZ30m2tPja2a1Oe4'
  });




router.post("/upload", async (req, res,next) => {

    const file = req.files.video
       console.log(file);
   cloudinary.uploader.upload(file.tempFilePath, { resource_type: "video"},(err,result) => {
     console.log("Error",err);
     console.log("Resulet",result);
    
 
     res.json({ 
     result :
      result.url

     })
  })
})



module.exports= router

