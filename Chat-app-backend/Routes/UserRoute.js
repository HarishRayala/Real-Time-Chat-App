const express=require("express");
const { getUser, updateUser, deleteUser, userFollow, unfollowuser } = require("../Controllers/UserController");
const UserRoute=express.Router();

UserRoute.get("/:id",getUser)
UserRoute.put("/:id",updateUser)
UserRoute.delete("/:id",deleteUser)
UserRoute.put("/:id/follow",userFollow)
UserRoute.put("/:id/unfollow",unfollowuser)

module.exports={UserRoute}