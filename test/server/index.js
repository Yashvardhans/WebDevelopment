const express = require("express") ;
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json({extended : true}));
app.use(express.urlencoded({extended :true}));
app.use(cors());

app.get("/" , function(req,res){
    res.send("Hello");
});

const Connection_Url = "mongodb+srv://admin:1234@test-project.i4g2wot.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(Connection_Url , {useNewUrlParser : true , useUnifiedTopology : true});


app.listen(5000 , function(req,res){
    console.log("Server started at port 5000")
});
