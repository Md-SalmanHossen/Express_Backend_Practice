import mongoose from "mongoose";

const userSchema =new mongoose.Schema(
  {
    name:{ 
      type: String, 
      required: [true, "Name is required"] 
   },
    email:{
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    password:{
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },
    role:{ 
      type: String, 
      enum: ["admin", "client"], 
      default: "client" 
   },
    avatarUrl:{
      type:String,
      default:""
   },
    bio: String,
    isEmailVerified:{
      type: Boolean, 
      default: false 
   },
   resetPasswordToken:{
      type:String,
      default:null,
   },
   resetPasswordExpired:{
      type:Date,
      default:null
   },
    refreshTokens: [String], // stores hashed refresh tokens for revocation
  },
  { timestamps: true }
);

export default mongoose.model('User',userSchema);
