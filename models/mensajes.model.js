const { Schema, model } = require('mongoose');

const mensajeSchema = new Schema({
    from: {
        type: String
    },
    to: {
        type: String
    },
    message: {
        type: String
    }
},{
    timestamps: true,
    versionKey: false
})

const Mensaje = model('Mensaje', mensajeSchema)
module.exports = Mensaje;