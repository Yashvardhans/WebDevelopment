import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name : {type : String , required :true} , 
    email : {type : String , required : true},
    password : {type : String , required : true},
    about : {type : String },
    tags : {type : [String] },
    joinedOn : {type : Date , default : Date.now()},
    customerStripeId :{type:String , required : true}
})

export default mongoose.model("User" , userSchema )
