const express = require('express');
const router = express.Router();
const multer = require('multer');
const mimeTypes = require('mime-types')

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb("", `${file.originalname}`)
  }
})

const upload = multer({
  storage: storage
})

const {prueba} = require('../controllers/example.controller')

router.post("/prueba", upload.array('files') , prueba)

module.exports = router;