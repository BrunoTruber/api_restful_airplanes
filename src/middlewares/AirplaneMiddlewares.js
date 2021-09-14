const mongoose = require("mongoose");
const Airplane = require("../models/Airplane");
const cors = require("cors");
const express = require("express");


const app = express();
app.use(express.json());

  // liberar o CORS em todas as requisições
app.use(cors());
  //ativar todos os pre-flights
app.options('*', cors());

// app.use((req, res, next) => {
// 	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
//     res.header("Access-Control-Allow-Origin", "*");
// 	//Quais são os métodos que a conexão pode realizar na API
//     res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
//     app.use(cors());
//     app.options('*', cors());
//     next();
// });

const validaID = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({ error: "Id Inválido" });
    return;
  }

  try {
    const airplane = await Airplane.findById(id);
    if(!airplane){
        return res.status(404).send({msg: "Modelo de avião não encontrado."})
    }
    res.airplane = airplane
  } catch (err) {
    return res.status(500).send({error: err})
  }

  next();
};

module.exports = { validaID };