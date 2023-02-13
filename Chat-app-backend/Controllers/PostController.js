const mongoose=require("mongoose")
const { PostModel } = require("../Model/PostModel");
const { UsersModel } = require("../Model/UserModel");

const createPost=async(req,res)=>{
    const newPost= new PostModel(req.body);
    try {
        await newPost.save();
        res.status(200).json("Post Created")
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const GetPost=async(req,res)=>{
    const id=req.params.id
    try {
        const postdetails=await PostModel.findById(id)
        res.status(200).json(postdetails)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


const UpdatePost=async(req,res)=>{
    const postId=req.params.id
    const {userId}=req.body
    try {
        const post=await PostModel.findById(postId)
        if(post.userId===userId){
            await post.updateOne({$set:req.body})
            res.status(200).json("Post Updated")
        }else{
            res.status(403).json("Action forbidden please enter correct userId")
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const deletePost=async(req,res)=>{
    const id=req.params.id
    const {userId}=req.body
    try {
        const post=await PostModel.findById(id)
        if(post.userId===userId){
            await post.deleteOne();
            res.status(200).json("Post Deleted Successfully")
        }else{
            res.status(403).json("Action forbidden please enter correct userId")
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

// like and dislike post
const likePost=async(req,res)=>{
    const id=req.params.id
    const {userId}=req.body
    try {
        const post=await PostModel.findById(id)
        if(!post.likes.includes(userId)){
            await post.updateOne({$push:{likes:userId}})
            res.status(200).json("Post Liked")
        }else{
            await post.updateOne({$pull:{likes:userId}})
            res.status(200).json("Post Disliked")
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

// Get Timeline Post
const GetTimelinePost=async(req,res)=>{
    const userId=req.params.id
    try {
        const currentUserPosts=await PostModel.find({userId:userId})
        //aggregation is array of steps 1. matching step
        // 2. look up is like when we have to match the doc in from one model to another model
        // 3. project is return type of aggregation
        const followingposts=await UsersModel.aggregate([
            {
                $match:{
                    _id:new mongoose.Types.ObjectId(userId)
                }
            },{
                $lookup:{
                    from:"posts",
                    localField:"following",
                    foreignField:"userId",
                    as:"followingposts"
                } 
            },{
                $project:{
                    followingposts:1,
                    _id:0
                }
            }
        ])  
        res.status(200).json(currentUserPosts.concat(...followingposts[0].followingposts)
        .sort((a,b)=>{
            return b.createdAt-a.createdAt
        })
        )
    } catch (error) {
        res.status(500).json(error.message)
    }
}
module.exports={createPost,GetPost,UpdatePost,deletePost,likePost,GetTimelinePost}