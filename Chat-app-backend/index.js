const mongoose=require("mongoose");
const express=require("express");
const cors=require("cors");
require("dotenv").config();
mongoose.set('strictQuery', false)
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken")
const { chatRoute } = require("./Routes/ChatRoute");
const connection = require("./config/db");
const { UsersModel } = require("./Model/UserModel");
const { UserRoute } = require("./Routes/UserRoute");
const { PostRouter } = require("./Routes/PostRoute");
require("dotenv").config();
const app=express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Welcome to home page")
})
app.post("/signup",async(req,res)=>{
    const {firstname,lastname,email,password}=req.body
    const isUser=await UsersModel.findOne({email})
    if(isUser){
        res.send("User already Exist Try to login ")
    }
    bcrypt.hash(password,4,async function(err,hash){
        if(err){
            res.status(400).send({message:err.message},"something Went wrong")
        }
        const newUser=new UsersModel({
            firstname,
            lastname,
            email,
            password:hash
        })
        try{
            await newUser.save();
            res.status(200).json(newUser)
        }catch(error){
            res.status(500).json({message:error.message})
        }
    })
})

app.post("/login",async(req,res)=>{
    const {email,password}=req.body
    const user=await UsersModel.findOne({email:email});
    console.log(user)
    if(user){
        const hashed_password=user.password
        const user_id=user._id;
        // console.log(user_id);
        bcrypt.compare(password,hashed_password,function(err,result){
            if(err){
                res.status(400).send({message:err.message})
            }
            if(result){
                const token=jwt.sign({user_id},process.env.SECRET_KEY);
                res.status(200).send({"msg":"Login Successfull",token})
                console.log(token);
            }else{
                res.status(400).send({"msg":"Login Failed"})
            }
        })
       }else{
        res.status(404).send({"msg":"User Doesn't Exist"})
       }
})

app.use("/chat",chatRoute)

app.use("/user",UserRoute)

app.use("/post",PostRouter)

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