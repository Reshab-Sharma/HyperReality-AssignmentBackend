const mongoose = require("mongoose");

const SurveyQuestionsSchema = new mongoose.Schema({
   question:{
    type:"string",
    required:true,
    unique:true,
   }

})
module.exports= mongoose.model("SurveyQuestions", SurveyQuestionsSchema);