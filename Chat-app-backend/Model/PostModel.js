const mongoose=require("mongoose");

const PostSchema=mongoose.Schema({
    userId:{type:String,required:true},
    description:{type:String},
    likes:[],
    image:String
},{
    timestamps:true
})

const PostModel=mongoose.model("post",PostSchema)

module.exports={PostModel}