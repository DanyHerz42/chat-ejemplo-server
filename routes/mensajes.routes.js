const express = require('express');
const router = express.Router();

const { getMessages } = require('../controllers/mensajes.controller')

//ruta que envia los mensajes guardados en la bd
router.get("/get-messages", getMessages)

module.exports = router;