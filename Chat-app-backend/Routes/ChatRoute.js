const express=require("express");
const { userChat, findChat, createChat } = require("../Controllers/ChatController");
const chatRoute=express.Router();

chatRoute.post("/",createChat);
chatRoute.get("/:userId",userChat);
chatRoute.get("/find/:firstId/:secondId",findChat);



module.exports={chatRoute}