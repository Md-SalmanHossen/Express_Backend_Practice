
import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();


const PORT = process.env.PORT || 1111;

app.listen(PORT, (error) => {
   if (error) {
      console.error(`Failed to start server ${error.message}`);
      process.exit(1);
   }
   console.log(`Server running on ${PORT}`);
})

