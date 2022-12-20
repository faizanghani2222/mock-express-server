const mongoose=require("mongoose")

const playSchema=new mongoose.Schema({
    name:{type:String,required:true},
    difficulty:{type:String,required:true}
})

const play=mongoose.model("play",playSchema)

module.exports=play