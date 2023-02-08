const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    firstname:{type:String},
    lastname:{type:String},
    email:{type:String,required:true},
    password:{type:String,required:true},
    isAdmin:{type:Boolean,default:false},
    gender:{type:String},
    profilepicture:{type:String},
    coverPicture:{type:String},
    about:{type:String},
    livesin:{type:String},
    worksAt:{type:String},
    relationship:{type:String},
    followers:[],
    following:[]
},
{
    timestamps:true
})

const UsersModel=mongoose.model("user",userSchema);

module.exports={UsersModel}