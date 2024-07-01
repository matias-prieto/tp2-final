import { Router } from "express";

//Traer al controlador que va a hacer los post, get, delete etc que pida el ej.
import SondaController from "../controllers/SondaController.js";
import { validateSondData } from "../middlewares/validateSondData.js";
import { validateSondaId } from "../middlewares/validateSondaId.js"

const routes = Router();

const sondaController = new SondaController();


//Poner la rutas que me piden el ejercicio.
routes.post("/", validateSondData, sondaController.createSonda);
routes.get("/", sondaController.getAllSondas);
routes.get("/:id", validateSondaId, sondaController.getSondaById);

export default routes;
