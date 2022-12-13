const express=require("express");
const app=express.Router()
const User=require("./user.model");


app.post("/register",async(req,res)=>{
    try{ 
    const {name,email,password}=req.body
    let user = new User({name,email, password });
    user = await user.save();
    res.send(user)
    }
    catch(e){
        
        res.status(401).send({ message: "Signup Failed",error:e })
    }
})

app.get("/getProfile/:id", async (req, res) => {
 try{ let p = await User.findById(req.params.id);
     res.send(p);
    }catch(e){
        res.status(401).send({ error:e })
    }
});

app.post("/login",async (req,res)=>{
   try{ const { email, password } = req.body;
    const u = await User.findOne({ email, password });
    res.send(u)
    }catch(e){
        res.status(401).send({ message: "Login Failed",error:e })
    }
})

app.get("/logout",async (req,res)=>{
    try{
        res.send({ message: "Logout Successful" })
    }
         catch(e){
            res.status(401).send({ message: "Logout Failed",error:e })
        }
     
 })

module.exports = app;