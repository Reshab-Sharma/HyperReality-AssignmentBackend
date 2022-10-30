const router = require("express").Router();
const SurveySessions = require("../models/SurveySession");

// ADD Questions
router.post("/Add",async(req,res)=>{
    try{ 
        const newQuestion = new SurveySessions({
            isCompleted:req.body.isCompleted,
            feedback: req.body.feedback,
        })
        const SurveyQuestion = await newQuestion.save();
        res.status(200).json(SurveyQuestion);
    }catch(e){ 
        res.status(500).json(e);
        }
})
module.exports = router;