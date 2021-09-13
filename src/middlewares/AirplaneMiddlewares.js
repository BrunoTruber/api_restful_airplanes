const mongoose = require("mongoose");
const Airplane = require("../models/Airplane");
const cors = require("cors");
const express = require("express");
require("express-async-errors");


const app = express();

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    app.use(cors());

    next();
});

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