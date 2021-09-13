const mongoose = require('mongoose');

const airplaneSchema = new mongoose.Schema({
    nome:{
        type: String,
        require: true
    },
    velocidademax:{
        type: String,
        require: true
    },
    preco:{
        type: String,
        require: true
    },
    imagem:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model("Airplane", airplaneSchema)