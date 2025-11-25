import mongoose from "mongoose";

const fileSchema=new mongoose.Schema({
   filename:{
      type:'String'
   }
},{timeseries:true});

const file =mongoose.model('File',fileSchema);
export default file;