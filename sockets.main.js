const io = require('./app');
const query = require('./database');

//esta linea abre la coneccion y recibe el socket para conectarnos
io.on("connection", (socket) => {
   //este socket esta a la escucha, cuando llegan mensajes los guarda en la bd y por ultimo los envia
  socket.on("mensaje", async (mensaje) => {
    console.log(mensaje);
    io.emit('conectado', mensaje)
  })
  socket.on("conectado", (nombre) => {
    io.emit("prueba", nombre)
  })
  //Este socket escucha si un cliente se desconecta
  socket.on("disconnect", () => {
    io.emit('mensajes', {nombre: "Servidor", mensaje: "Ha abandonado la sala"})
  })
})
