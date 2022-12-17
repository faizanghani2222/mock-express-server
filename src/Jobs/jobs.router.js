const express=require("express")
const Jobs=require("./jobs.model")
const app=express.Router()

app.get("/",async (req,res)=>{
    try{
        let d=await Jobs.find()
        if(req.query.search){
            let search=req.query.search
            d=await Jobs.find({language:search})
            res.send(d) 
        }
        else if(req.query){
            if(req.query.role){
            let filter=req.query.role
            d=await Jobs.find({role:filter})
            }
            if(req.query.sortby){
                let s=req.query.sortby
                if(s==="asc"){
                    d=d.sort((a,b)=>{
                        return new Date(a.postedAt) - new Date(b.postedAt)
                    })
                }else if(s==="dsc"){
                    d=d.sort((a,b)=>{
                        return new Date(b.postedAt) - new Date(a.postedAt)
                    })
                }
            }
            res.send(d) 
        }else{
          res.send(d) 
        }
    }catch(e){
        res.status(401).send({error:e})
    }
})

app.post("/",async(req,res)=>{
    try{
        let data=req.body
        let d=new Jobs(data)
        d=await d.save()
        res.send(d)
    }catch(e){
        res.status(404).send({error:e})
    }
})


module.exports=app