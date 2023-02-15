const express=require("express");
const { addMessage, getMessages } = require("../Controllers/MessageController");
const MessageRouter=express.Router();

MessageRouter.post("/",addMessage);
MessageRouter.get("/:chatId",getMessages)

module.exports={MessageRouter}