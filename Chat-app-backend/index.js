const mongoose=require("mongoose");
const express=require("express");
const cors=require("cors");
mongoose.set('strictQuery', false)
const { chatRoute } = require("./Routes/ChatRoute");
const connection = require("./config/db");
require("dotenv").config();
const app=express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Welcome to home page")
})

app.use("/chat",chatRoute)

app.listen(8000,async()=>{
    try{
        await connection,
        console.log("Connection to Mongodb Successfull");
    }
    catch(err){
        console.log("Error connection to db",err)
    }
    console.log("Listening to server 8000")
})