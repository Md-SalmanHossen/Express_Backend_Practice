import mongoose from "mongoose";

const blogSchema=mongoose.Schema({
   title:{
      type:String,
      required:true,
   },
   img:String,
   category:String,
   description:String,
   short_description:String
    
},{
   timestamps:true,
   versionKey:false
});

const Blog=mongoose.model("Blog",blogSchema);
export default Blog;

