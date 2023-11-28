const express = require("express");
const router = express.Router();

const uploader = require('../controllers/uploads.js');
console.log(uploader)

router.post('/upload',uploader);

module.exports = router