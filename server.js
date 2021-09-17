const express = require("express");
const routes = require("./src/routes/routes")
require("dotenv").config();
const connectToDb = require("./src/database/database");
const cors = require("cors");

connectToDb();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.use(cors());
app.options('*', cors());

app.use(routes);

app.listen(port, () =>
  console.info(`Servidor rodando em http://localhost:${port}`)
);