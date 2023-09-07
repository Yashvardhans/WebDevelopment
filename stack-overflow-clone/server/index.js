import express, { urlencoded } from "express";
import cors from "cors";
import mongoose from "mongoose";

import userRoutes from "./routes/users.js";
import questionRoutes from "./routes/questions.js";
import answerRoutes from "./routes/answers.js";
import subRoutes from './routes/subs.js'
import dotenv from 'dotenv';




const app = express() ;
dotenv.config();

app.use(express.json({limit : "30mb" , extended : true}))
app.use(urlencoded({limit :"30mb" , extended :true}))
app.use(cors()) ;




app.get("/" , function(req,res){
  res.send("stackoverflow clone api")
});

app.use("/user" , userRoutes)
app.use("/questions" ,questionRoutes)
app.use('/answer' , answerRoutes)
app.use('/subs' , subRoutes)

const PORT = process.env.PORT || 5000 ;

const Connection_Url = "mongodb+srv://admin:admin@stack-overflow-clone.oybytbn.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(Connection_Url , {useNewUrlParser : true , useUnifiedTopology : true})
   .then(()=> app.listen(PORT , ()=> {console.log(`Server started on ${PORT}`);}))
   .catch((err) => {console.log(err);})