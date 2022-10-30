const mongoose = require("mongoose");

const SurveySessionSchema = new mongoose.Schema({
    
        isCompleted:{
            type:Boolean,
            default:false,
            
        },
        feedback:{
                type:Array,
                default:[],
            
        }

    


})
module.exports= mongoose.model("Survey_Sessions", SurveySessionSchema);