const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 5000;
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME; 
 const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;

const DB_NAME = 'reel'
const DB_URI = process.env.MONGODB_URI
let count = 0;
module.exports = {
    PORT,
    CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET,
    DB_NAME,
    DB_URI,
    count
    };