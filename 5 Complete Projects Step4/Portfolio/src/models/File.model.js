import mongoose from "mongoose";

const fileSchema=new mongoose.Schema({
   filename:{
      type:'String'
   }
},{timeseries:true});

const File =mongoose.model('File',fileSchema);
export default File;