const express=require("express")
const question = require("../Questions/Question.model")

const app=express.Router()

app.get("/",async(req,res)=>{
    try{
        let {category,difficulty,questions}=req.query
        let d=await question.find({category:category,difficulty:difficulty}).limit(questions)
        res.send(d)
    }catch(e){
        res.status(401).send({error:e})
    }
})

module.exports=app