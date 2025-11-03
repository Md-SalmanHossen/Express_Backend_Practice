import mongoose from 'mongoose';

const commentSchema=mongoose.Schema({
   commentText:{
      String,
      required:true
   },
   blog:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'blog'
   },
   user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'user'
   }
},{Timestamps:true});

export default mongoose.model('comment',commentSchema);