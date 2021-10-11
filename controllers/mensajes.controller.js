const { Mensaje } = require('../models');

//funcion que retorna todos los mensajes de la bd
exports.getMessages = async (req, res) => {
  try {
    const mensajes = await Mensaje.find()
    res.status(200).json({mensajes})
    return
  } catch (error) {
    res.json(error);
  }
}