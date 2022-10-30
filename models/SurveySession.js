const mongoose = require("mongoose");

const SurveySessionSchema = new mongoose.Schema({
    
        isCompleted:{
            type:Boolean,
            default:false,
            required:true,
            unique:true,
        },
        feedback:{
                type:Array,
                default:[],
            required:true,
            unique:true,
        }

    


})
module.exports= mongoose.model("SurveySession", SurveySessionSchema);