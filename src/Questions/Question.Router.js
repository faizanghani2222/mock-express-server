const express=require("express")
const question = require("./Question.model")

const app=express.Router()

app.post("/",async(req,res)=>{
    try{
        let data=req.body
        let q=new question(data)
        q=await q.save()
        res.send(q)
    }catch(e){
        res.status(401).send({error:e})
    }
})

app.get("/",async(req,res)=>{
    try{
        let data=await question.find()
        let obj={
            length:data.length,
            data:data
        }
        res.send(obj)
    }catch(e){
        res.status(401).send({error:e})
    }
})

module.exports=app