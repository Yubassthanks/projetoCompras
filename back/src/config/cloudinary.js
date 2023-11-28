const cloudinary= require ('cloudinary');
          
cloudinary.v2.config({ 
  cloud_name: 'dixbq97iq', 
  api_key: '596813571593224', 
  api_secret: 'MFVSEPHpK85U8zvNyvo0dwYXVH4' 
});

module.exports = cloudinary;