const Airplane = require("../models/Airplane");

const getAll = async (req, res) => {
  try {
    const airplanes = await Airplane.find(); // Promisse
    if (airplanes.length === 0)
      return res
        .status(404)
        .send({ message: "Não existem aviões cadastrados!" });
    return res.send({ airplanes });
  } catch (err) {
    res.status(500).send({ error: err.message }); 
  }
};

const getById = async (req, res) => {
  const { id } = req.params;

  try {
    const airplane = await Airplane.findById(id);
    if (!airplane) {
      res.status(404).json({ message: "Modelo de avião não encontrado" });
      return;
    }
    return res.send({ airplane });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const create = async (req, res) => {
  const { nome, velocidademax, preco, imagemUrl } = req.body;

  if (!nome || !velocidademax || !preco || !imagemUrl) {
    res.status(400).send({
      message: "Você não enviou todos os dados necessários para o cadastro",
    });
    return;
  }

  const novoAirplane = await new Airplane({
    nome,
    velocidademax,
    preco,
    imagemUrl,
  });

  try {
    await novoAirplane.save();
    return res
      .status(201)
      .send({ message: "Novo modelo de avião criado com sucesso", novoAirplane });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const update = async (req, res) => {
  const { nome, velocidademax, preco, imagemUrl } = req.body;

  if (!nome || !velocidademax || !preco || !imagemUrl) {
    res.status(400).send({
      message: "Você não enviou todos os dados necessários para o cadastro",
    });
    return;
  }

  res.airplane.nome = nome;
  res.airplane.velocidademax = velocidademax;
  res.airplane.preco = preco;
  res.airplane.imagemUrl = imagemUrl;

  try {
    await res.airplane.save();
    res.send({ message: "Modelo de avião alterado com sucesso!" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const del = async (req, res) => {
  try {
    await res.airplane.remove();
    return res.send({ message: "Modelo de avião removido com sucesso!" });
  } catch (err) {
    return res.status(500).send({ erro: err.message });
  }
};

const filterByName = async (req, res) => {
  const nome = req.query.nome;
  if (!nome) {
    res.status(400).send({ erro: "Parametro não recebido" });
    return;
  }
  try {
    const airplanes = await Airplane.find({ nome: { $regex: `${nome}`, $options: 'i'} });
    return res.send({ airplanes });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

const filterAll = async (req, res) => {
  let { nome, velocidademax, preco } = req.query;

  !nome ? (nome = "") : (nome = nome);
  !velocidademax ? (velocidademax = "") : (velocidademax = velocidademax);
  !preco ? (preco = "") : (preco = preco);

  try {
    const airplanes = await Airplane.find({
      nome: { $regex: `${nome}`, $options: 'i' },
      velocidademax: { $regex: `${velocidademax}`, $options: 'i'},
      preco: { $regex: `${preco}`, $options: 'i'},
    });

    if (airplanes.length === 0)
      return res.status(404).send({ erro: "Modelo de avião não encontrado" });

    return res.send({ airplanes });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  del,
  filterByName,
  filterAll,
};