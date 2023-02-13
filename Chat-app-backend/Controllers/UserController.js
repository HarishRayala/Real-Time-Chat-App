const { UsersModel } = require("../Model/UserModel");
const bcrypt=require("bcrypt");

const getUser=async(req,res)=>{
    const id=req.params.id
    try {
        const user=await UsersModel.findById(id)
        if(user){
            const {password,...otherDetails}=user._doc   //here user._doc will receive basically all the responses lie under "._doc" this will now do take away password and send rest. 
            res.status(200).send(otherDetails)
        }else{
            res.status(404).json("No such user exists")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


const updateUser=async(req,res)=>{
    const id=req.params.id
    const {currentuserId,currentUserAdminStatus,password}=req.body;

    if(id===currentuserId || currentUserAdminStatus){
        try {
            if(password){
                const salt=await bcrypt.genSalt(10);
                req.body.password=await bcrypt.hash(password,salt)
            }
            const user=await UsersModel.findByIdAndUpdate(id,req.body,{new:true})
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    }else{
        res.status(403).json("Access Denied! You can only updated your own profile")
    }
}

const deleteUser=async(req,res)=>{
    const id=req.params.id

    const {currentuserId,currentUserAdminStatus}=req.body;
    
    if(currentuserId===id || currentUserAdminStatus){
        try {
            await UsersModel.findByIdAndDelete(id);
            res.status(200).json("User Deleted Successfully")
        } catch (error) {
            res.status(500).json(error)
        }
    }else{
        res.status(403).json("Access Denied! You can only delete your own profile")
    }
}

const userFollow=async(req,res)=>{
    const id=req.params.id
    const {currentuserId}=req.body
    if(currentuserId===id){
        req.status(403).json("Action forbidden you can't follow yourself")
    }else{
        try {
            const followuser=await UsersModel.findById(id)
            const followingUser=await UsersModel.findById(currentuserId)
            if(!followuser.followers.includes(currentuserId)){
                await followuser.updateOne({$push :{followers:currentuserId}})
                await followingUser.updateOne({$push:{following:id}})
                res.status(200).json("User Followed")
            }else{
                res.status(403).json("You are already following the user")
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

const unfollowuser=async(req,res)=>{
    const id=req.params.id
    const {currentuserId}=req.body
    if(currentuserId===id){
        req.status(403).json("Action forbidden you can't follow yourself")
    }else{
        try {
            const followuser=await UsersModel.findById(id)
            const followingUser=await UsersModel.findById(currentuserId)
            if(followuser.followers.includes(currentuserId)){
                await followuser.updateOne({$pull :{followers:currentuserId}})
                await followingUser.updateOne({$pull:{following:id}})
                res.status(200).json("User UnFollowed")
            }else{
                res.status(403).json("You are not following the user")
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
module.exports={getUser,updateUser,deleteUser,userFollow,unfollowuser}