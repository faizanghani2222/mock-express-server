const express=require("express")
const User = require("./User.model")

const app=express.Router()

app.post("/signup",async(req,res)=>{
    try{
        let data=req.body
        let u=new User(data)
        u=await u.save()
        res.send(u)
    }catch(e){
        res.status(401).send({error:e})
    }
})

app.post("/login",async(req,res)=>{
    try{
        let d=req.body
        let data=await User.find({email:d.email,password:d.password})
        console.log(data)
        if(data){
            res.send(data)
        }else{
            res.status(401).send({message:"Invalid credentials try again or signup"})
        }
        
    }catch(e){
        res.status(401).send({error:e})
    }
})

module.exports=app