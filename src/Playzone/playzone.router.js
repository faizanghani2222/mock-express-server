const express=require("express")

const app=express.Router()

app.post("/",async(req,res)=>{
    try{
        let {name,difficulty}=req.body
        let words=["karlmarx"," sesquipedalian","ethopia","ignominious","mischievous","squirrel","argentina","subjective","phenomenon","onomatopoeia","supercalifragilisticexpialidocious","worcestershire","quinoa","temperature","scissors","anemone","isthmus","colonel","vetarian","waterpickle","successful","squirrel","masaitribe"]
        if(difficulty==="low"){
            res.send({name:name,time:30,words:words})
        }
        else if(difficulty==="medium"){
            res.send({name:name,time:20,words:words})
        }
        else if(difficulty==="high"){
            res.send({name:name,time:10,words:words})
        }
    }catch(e){
        res.status(401).send({error:e})
    }
})

module.exports=app