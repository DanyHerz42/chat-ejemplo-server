// const { Mensaje } = require('../models');

//funcion que retorna todos los mensajes de la bd
exports.getMessages = async (req, res) => {
  try {
   
    res.status(200).json({mensajes: "aqui van los mensjaes"})
    return
  } catch (error) {
    res.json(error);
  }
}