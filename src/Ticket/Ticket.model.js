const mongoose=require("mongoose")
const ticketSchema=new mongoose.Schema({
    email:{type:String,required:true},
    title:{type:String,required:true},
    category:{type:String,required:true},
    message:{type:String,required:true},
    timeStamp:{type:Number,default:Date.now()}
})

const ticket=mongoose.model("ticket",ticketSchema)

module.exports=ticket