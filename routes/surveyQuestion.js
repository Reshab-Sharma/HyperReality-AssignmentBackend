const router = require("express").Router();
const SurveyQuestions = require("../models/SurveyQuestion");

// ADD Questions
router.post("/AddQuestion",async(req,res)=>{
    try{ 
        const newQuestion = new SurveyQuestions({
            question:req.body.question 
        })
        const SurveyQuestion = await newQuestion.save();
        res.status(200).json(SurveyQuestion);
    }catch(e){ 
        res.status(500).json(e);
        }
})
// Get All questions
router.get("/", async(req, res)=>{
 let page = req.query;
 let currentPage = page.page;
 let limit=1;
if(!currentPage) currentPage = 0;
let skip;
if(currentPage === 0){
    skip = 0;
}else{
    skip = currentPage * 1;
}
 const questions = await SurveyQuestions.find();
const question = await SurveyQuestions.find().skip(skip).limit(limit);
 res.send({currentPage:currentPage,limit:limit,totalPage:questions?.length,question:question});
});

module.exports = router;