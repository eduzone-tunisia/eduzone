const router = require("express").Router();
const cours = require("../database/models/course");

router.get('/Get', (req, res) => {
    cours.find()
        .then( course=> res.json(course))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.post('/addCourse', (req, res)=>{
    
    const title = req.body.title;
    const description = req.body.description;
    const videoUrl = req.body.videoUrl ;
    const price = req.body.price;
    const numberOfViews = req.body.numberOfViews;
    
    const sections = req.body.sections;
    

    
    
    const newCourse = new cours({
        title,
        description,
        videoUrl,
        price,
        numberOfViews,
        sections
        
    });
    
    newCourse.save()
        .then(() => res.json('new Course added'))
        .catch(err => res.status(400).json('Err ' + err))
})
module.exports = router;
