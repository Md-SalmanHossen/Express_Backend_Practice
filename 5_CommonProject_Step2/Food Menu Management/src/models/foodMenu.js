import mongoose from 'mongoose';

const foodMenuSchema=new mongoose.Schema({
   name:{
      type:String,
      required:[true , 'Please provided food name'],
      trim:true,
      unique:true
   },
   description:{
      type:String,
      required:[true,'Please provide description']
   },
   price:{
      type:Number,
      required:[true,'Please provide a price']
   },
   category:{
      type:String,
      required:[true,'Please provide a category']
   },
   imageUrl:{
      type:String,
      default:'no-photo.jpg'
   },
   rating:{
      type:Number,
      min:1,
      max:5,
      default:4.5
   },
   inStock:{
      type:Boolean,
      default:true,
   },
   isFeatured:{
      type:Boolean,
      default:false
   }
},{
   timestamps:true
})

const FoodMenu=mongoose.model('foodMenu',foodMenuSchema);
export default FoodMenu;
