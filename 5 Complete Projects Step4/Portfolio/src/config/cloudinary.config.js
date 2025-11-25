import {v2s as cloudinary} from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
   cloud_name: 'CLOUDINARY_CLOUD_NAME', 
   api_key: 'CLOUDINARY_API_KEY', 
   api_secret: 'CLOUDINARY_SECRET_KEY'
});

export default cloudinary;