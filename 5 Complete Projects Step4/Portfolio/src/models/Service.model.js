import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
   title:{ 
      type: String, 
      required: [true,'Service title is required'],
      trim:true
   },
   description:{ 
      type: String,
      required:[true, "Service description is required"],
      trim:true
   },
   price:{ 
      type: Number, 
      default: 0,
      min:[0,"Price can not be negative"]
   },
   features:[{ type: String,trim:true }], 
   imageUrl:{ 
      type: String,
      default:" ",
      trim:true 
   },
    category:{
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Category",
      required:[true, "Category link is required"] 
   },
   published:{
       type: Boolean, default: true 
      },
  },
  { timestamps: true }
);

const Service= mongoose.model("Service", serviceSchema);
export default Service;