const express=require("express")
const app=express.Router()
const list=require("./list.model")

app.get("/",async (req,res)=>{
   try{ 
    let d=await list.find()
    res.send(d)
    }catch(e){
        res.status(401).send({message:"failed",error:e})
    }
})


app.post("/",async(req,res)=>{
    try{
        let data=req.body
        let l=new list(data)
        l=await l.save();
        res.send(l)
    }catch(e){
        res.status(404).send({error:e})
    }
})

app.patch("/bookmark/:id",async(req,res)=>{
    try{
        let id=req.params.id
        let l=await list.findByIdAndUpdate(id,{bookmark:true})
        res.send(l)
    }catch(e){
        res.status(404).send({error:e})
    }
})

app.get("/delete/:id",async(req,res)=>{
    try{
        let l=await list.deleteOne({_id:req.params.id})
        res.send(l)
    }catch(e){
        res.status(404).send({error:e})
    }
})
 


module.exports=app