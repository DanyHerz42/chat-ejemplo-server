const path = require('path');
const fs = require('fs')
exports.prueba = async(req, res) => {
  console.log(__dirname + "/../..")
  res.send("ok")
} 