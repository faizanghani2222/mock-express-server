const mongoose=require("mongoose")

const quizSchema=new mongoose.Schema({
    category:{type:String,required:true},
    difficulty:{type:String,required:true},
    questions:{type:Number,required:true}
})

const quiz=mongoose.model("quiz",quizSchema)

module.exports=quiz