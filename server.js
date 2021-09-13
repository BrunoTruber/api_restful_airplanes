const express = require("express");
const routes = require("./src/routes/routes")
require("dotenv").config();
const connectToDb = require("./src/database/database");

connectToDb();
const app = express();
const port = 3000;




app.use(express.json());

app.use(routes);

app.listen(port, () =>
  console.info(`Servidor rodando em http://localhost:${port}`)
);