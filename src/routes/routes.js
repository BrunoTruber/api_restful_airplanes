const routes = require("express").Router();
const cors = require("cors");

const app = express();

// liberar o CORS em todas as requisições
app.use(cors());
//ativar todos os pre-flights
app.options('*', cors());

const AirplaneController = require("../controllers/AirplaneController");
const AirplaneMiddleware = require("../middlewares/AirplaneMiddlewares");

routes.get("/airplanes", AirplaneController.getAll);
routes.get("/airplanes/:id",
  AirplaneMiddleware.validaID,
  AirplaneController.getById
);
routes.post("/airplanes", AirplaneController.create);
routes.put("/airplanes/:id",
  AirplaneMiddleware.validaID,
  AirplaneController.update
);
routes.delete("/airplanes/:id",
  AirplaneMiddleware.validaID,
  AirplaneController.del
);
routes.get("/filterByName", AirplaneController.filterByName);
routes.get("/filterAll", AirplaneController.filterAll);

module.exports = routes;