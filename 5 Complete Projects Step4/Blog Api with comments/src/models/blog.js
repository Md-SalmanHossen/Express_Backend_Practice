import mongoose from 'mongoose';

const blogSchema=new mongoose.Schema({
   title:String,
   content:String,
   author:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'user'
   },
});

export default mongoose.model('blog',blogSchema);