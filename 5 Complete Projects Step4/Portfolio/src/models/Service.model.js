import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
   title:{ 
      type: String, 
      required: true 
   },
   description:{ 
      type: String 
   },
   price:{ 
      type: Number, 
      default: 0 
   },
   features:[{ type: String }], 
   imageUrl:{ 
      type: String 
   },
    category:{
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Category" 
   },
   published:{
       type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("Service", serviceSchema);
