const express=require("express");
const { createPost, GetPost, UpdatePost, deletePost, likePost, GetTimelinePost } = require("../Controllers/PostController");

const PostRouter=express.Router();

PostRouter.post("/",createPost)
PostRouter.get("/:id",GetPost)
PostRouter.put("/:id",UpdatePost)
PostRouter.delete("/:id",deletePost)
PostRouter.put("/:id/like",likePost)
PostRouter.get("/:id/timeline",GetTimelinePost)

module.exports={PostRouter}