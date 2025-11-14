import jwt from 'jsonwebtoken';

const generate_token=(payload,res)=>{
   try {

      const token=jwt.sign(
         payload,
         process.env.JWT_SECRET,{
         expiresIn:'7d'
      });

      res.cookie('jwt',token ,{
         httpOnly:false,//for testing it false
         sameSite:'strict',
         maxAge:7*24*60*60*1000
      });

      return token;

   } catch (error) {
      console.log(`Server error for generate token : ${error.message}`)
   }
}

export default generate_token;