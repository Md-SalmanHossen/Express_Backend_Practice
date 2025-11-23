import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
  name:{
    type:String,
    required:[true,"Name is required"],
    trim:true,
  },
  email:{
    type:String,
    required:[true,"Email is required"],
    unique:true,
    lowercase:true,
    trim:true,
  },
  password:{
    type:String,
    required:[true,"Password is required"],
    minlength:6
  },
  role:{
    type:String,
    enum:["admin","client"],
    default:"client"
  },
  avatar_Url:{
    type:String,
    default:"",
  },
  bio:{
    type:String,
    default:""
  },
  isEmailVerified:{
    type:String,
    default:false
  },
  otp:{
    type:String,
    default:'null'
  },
  otpExpire:{
    type:Date,
    default:null,
  },
  resetPasswordToken:{
    type:String,
    default:null
  },
  resetPasswordExpired:{
    type:String,
    default:null
  },
  refreshTokens:[String],
},{timestamps:true});

export default mongoose.model("User",userSchema);