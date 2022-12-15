const mongoose=require("mongoose");
const listSchema=new mongoose.Schema({
    title:{type:String,required:true},
    quantity:{type:Number,required:true},
    priority:{type:String,required:true},
    timestamp:{ type: Number, default: Date.now()},
    description:{type:String,required:true},
    bookmark:{type:Boolean,default:false}
})

const list=mongoose.model("list",listSchema)

module.exports=list