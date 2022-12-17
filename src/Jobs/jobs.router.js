const express=require("express")
const Jobs=require("./jobs.model")
const app=express.Router()

app.get("/",async (req,res)=>{
    try{
        let page=parseInt(req.query.page)-1 || 0
        let limit=parseInt(req.query.limit) ||10
        let start= page* limit;
        
        if(req.query.search){
            let search=req.query.search
            let d=await Jobs.find({language:search}).skip(start).limit(limit)
            res.send(d) 
        }
        
        else if(req.query){
            
            if(req.query.role && req.query.sortby){
                let sort=req.query.sort==="asc"?1:-1
                let obj={
                    postedAt:sort
                }
                let filter=req.query.role
               let d=await Jobs.find({role:filter}).sort(obj).skip(start).limit(limit)
               res.send(d) 
            }


            else if(req.query.role){
            let filter=req.query.role
            let d=await Jobs.find({role:filter}).skip(start).limit(limit)
            res.send(d) 
            }


             else if(req.query.sortby){
                let d=await Jobs.find()
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
                d=d.slice(start,(start+limit))
                res.send(d)
                }
                
                
                else{
                   let d=await Jobs.find().skip(start).limit(limit)
                    res.send(d)   
                }
          
           
           
        }else{
          let d=await Jobs.find().skip(start).limit(limit)
          res.send(d) 
        }
    }catch(e){
        res.status(401).send({error:e})
    }
})


app.get("/all",async (req,res)=>{
    try{
        
        if(req.query.search){
            let search=req.query.search
            let d=await Jobs.find({language:search})
            res.send(d) 
        }
        
        else if(req.query){
            
            if(req.query.role && req.query.sortby){
                let sort=req.query.sort==="asc"?1:-1
                let obj={
                    postedAt:sort
                }
                let filter=req.query.role
               let d=await Jobs.find({role:filter}).sort(obj)
               res.send(d) 
            }


            else if(req.query.role){
            let filter=req.query.role
            let d=await Jobs.find({role:filter})
            res.send(d) 
            }


             else if(req.query.sortby){
                let d=await Jobs.find()
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
                res.send(d)
                }
                
                
                else{
                   let d=await Jobs.find()
                    res.send(d)   
                }
          
           
           
        }else{
          let d=await Jobs.find().skip(start).limit(limit)
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