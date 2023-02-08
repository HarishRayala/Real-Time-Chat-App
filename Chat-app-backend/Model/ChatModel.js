const mongoose=require("mongoose");

const ChatSchema=mongoose.Schema({
    members:{Array},
},{
    timestamps:true
})

const ChatModel=mongoose.model("chat",ChatSchema);

module.exports=ChatModel