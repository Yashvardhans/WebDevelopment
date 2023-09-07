import mongoose from "mongoose";

const QuestionSchema = mongoose.Schema({
    questionTitle :{type : String, required : "Question must have title "},
    questionBody : {type : String ,  required : "Question must have a body"},
    questionTags : {type :[String] , required : "Questions must have tags"},
    noOfAnswers : {type : Number , default : 0},
    upVote : {type : [String] , default:[]},
    downVote : {type : [String] , default:[]},
    userPosted : {type: String , required : "Author name required"},
    userId : {type:String},
    askedOn : {type : Date , default : Date.now()},
    answers : [{
        answerBody : String,
        userAnswer : String,
        userId : String,
        answeredOn : {type : Date, default : Date.now()}

    }]
})

export default mongoose.model("Question", QuestionSchema)