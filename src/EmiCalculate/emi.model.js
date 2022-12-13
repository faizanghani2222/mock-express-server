const mongoose=require("mongoose")

const emiSchema=new mongoose.Schema({
    amount:{type:Number,required:true},
    interest:{type:Number,required:true},
    tenure:{type:Number,required:true}
})

const emiCal=mongoose.model("emi",emiSchema);
module.export=emiCal;