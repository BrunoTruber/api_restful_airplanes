const mongoose = require('mongoose');

const airplaneSchema = new mongoose.Schema({
    nome:{
        type: String,
        require: true
    },
    velocidademax:{
        type: Number,
        require: true
    },
    preco:{
        type: Number,
        require: true
    },
    imagem:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model("Airplane", airplaneSchema)