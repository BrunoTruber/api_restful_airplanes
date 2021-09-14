const mongoose = require("mongoose");
const Airplane = require("../models/Airplane");
const cors = require("cors");
const express = require("express");


const app = express();
app.use(express.json());
app.use(cors());

	//CORS

	// app.all("/*", (req, res, next) => {
	// 	res.header("Access-Control-Allow-Origin", "*");

	// 	res.header("Access-Control-Allow-Methods", "*");

	// 	res.header(
	// 		"Access-Control-Allow-Headers",
	// 		"Access-Control-Allow-Headers", "Origin", "Accept", "X-Requested-With", "Content-Type", "Access-Control-Request-Method", "Access-Control-Request-Headers", "Authorization"
	// 	);
	// 	next();
	// });
app.options('*', cors());


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