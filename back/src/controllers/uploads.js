const cloudinary = require('../config/cloudinary')

const upload = async(req, res) => {
  const { base64 } = req.body

  const response = await cloudinary.v2.uploader
    .upload(base64, {
      folder: '',
      resource_type: 'image'
    }).catch(err => {
      console.error(err)})
    
  return res.json({
    url: response.secure_url
  })
}

module.exports = upload;
