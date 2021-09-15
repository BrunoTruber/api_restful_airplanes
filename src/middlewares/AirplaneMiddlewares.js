const mongoose = require("mongoose");
const Airplane = require("../models/Airplane");
const express = require("express");


const app = express();
app.use(express.json());


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