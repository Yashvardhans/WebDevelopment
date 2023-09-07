const mongoose  = require("mongoose");

const postSchema = mongoose.Schema({
    name : {type : String , required :true} , 
    about : {type : String },
    address : {type : String , required : true} ,
    description : {type : String , required: true} ,
    requirement : {type : String , required : true }  
})

export default mongoose.model("Post" , postSchema )

