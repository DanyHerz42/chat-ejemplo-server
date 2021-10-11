const io = require('./app');
const {Mensaje} = require('./models')

//esta linea abre la coneccion y recibe el socket para conectarnos
io.on("connection", (socket) => {
   //este socket esta a la escucha, cuando llegan mensajes los guarda en la bd y por ultimo los envia
  socket.on("mensaje", async ({to, from, mensaje}) => {
    const newMessage = new Mensaje({
      to,
      from,
      message: mensaje
    })
    const messageSaved = await newMessage.save();
    io.emit('mensajes', {to, from, message: mensaje})
  })

  //Este socket escucha si un cliente se desconecta
  socket.on("disconnect", () => {
    io.emit('mensajes', {nombre: "Servidor", mensaje: "Ha abandonado la sala"})
  })
})
