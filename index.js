const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const QuestionRoute = require("./routes/surveyQuestion");
const SessionRoute = require("./routes/surveySession");
const cors= require("cors");

dotenv.config();
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGO_URL,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
}).then(console.log("connected")).catch((err)=>console.log(err));
app.use("/api/Question",QuestionRoute);
app.use("/api",SessionRoute);
 
app.listen(process.env.Port || 5000,()=>{ 
    console.log("Backend is running"); 
})