import mongoose from 'mongoose';

const blogSchema=new mongoose.Schema({
   title:{
      String,
      required:true
   },
   content:{
      String,
      required:true
   },
   author:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'user'
   },
},{Timestamps:true});

export default mongoose.model('blog',blogSchema);