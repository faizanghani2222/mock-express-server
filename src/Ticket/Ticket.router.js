const express=require("express")
const Ticket=require("./Ticket.model")

const app=express.Router()

app.post("/",async(req,res)=>{
    try{
        let data=req.body
        let t=new Ticket(data)
        t=await t.save()
        res.send(t)
    }catch(e){
        res.status(401).send({error:e})
    }
})

app.get("/",async(req,res)=>{
    try{
        let data
        if(req.query.category){
            let c=req.query.category
            data=await Ticket.find({category:c})
        }else{
            data=await Ticket.find()
        }
        res.send(data)
    }catch(e){
        res.status(401).send({error:e})
    }
})

app.get("/:email",async(req,res)=>{
    try{
        let e=req.params.email
        let data
        if(req.query.category){
            let c=req.query.category
            data=await Ticket.find({email:e,category:c})
        }else{
            data=await Ticket.find({email:e})
        }
        res.send(data)
    }catch(e){
        res.status(401).send({error:e})
    }
})


module.exports=app