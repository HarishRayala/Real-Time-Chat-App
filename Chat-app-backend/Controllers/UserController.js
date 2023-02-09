const { UsersModel } = require("./Model/UserModel");

const getUser=async(req,res)=>{
    const id=req.params.id
    try {
        const user=await UsersModel.findById(id)
        res.status(200).send(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports={getUser}