const express=require("express")

const app=express.Router()
let User=require("./user.model")


app.get("/",async(req,res)=>{
    try{
        let d=await User.find().sort({score:-1})
        res.send(d)
    }catch(e){
        res.status(401).send({message:e})
    }
})


app.post("/",async(req,res)=>{
    try{
        let u=req.body
        let d=new User(u)
        d=await d.save()
        res.send(d)
    }catch(e){
        res.status(401).send({message:e})
    }
})


module.exports=app