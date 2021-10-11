//moudlos principales e intanciaciones
const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const morgan = require('morgan')
require('./database')

//configuracion de cors en express
app.use(cors())
app.options("*", cors())
app.use(express.json());
app.use(morgan('dev'))


//rutas
const messages = require('./routes/mensajes.routes');
app.use("/mensajes", messages)



//crear un server de Node nativo pasando como parametro el server de Express
const servidor = http.createServer(app);

//declarcion del socket inicial
const socketIo = require('socket.io');

//instanciacion y configuracion de Socket.Io con cors **Importante agregar CORS aqui, de lo contrario no funciona
const io = socketIo(servidor, {
  cors: {
    origin: "http://localhost:8000",
    methods: ["GET", "POST"]
  }
});


//exportacion del modulo io para poder emitir mensajes
module.exports = io;

//ejecucion de los sockets
require('./sockets.main')

//servidor en escucha
servidor.listen(3001, () => {
  console.log(`Server on port 3001`);
})