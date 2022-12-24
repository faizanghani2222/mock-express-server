const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const bodyParser=require("body-parser")
const userRouter=require("./src/User/User.Router")
const ticketRouter=require("./src/Ticket/Ticket.router")
require('dotenv').config();


const app=express();

const port=process.env.PORT || 8080
const Database=process.env.DATABASE

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/user",userRouter)
app.use("/ticket",ticketRouter)

app.listen(port,async ()=>{
    await mongoose.connect("mongodb+srv://faizanghani2222:27102001@cluster0.4knlafc.mongodb.net/?retryWrites=true&w=majority");
    console.log("started")
})
