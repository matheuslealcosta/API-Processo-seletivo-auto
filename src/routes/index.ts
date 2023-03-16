import InscricaoController from "../controllers/InscricaoController";
import { Router } from "express";
import  express  from "express";

const routes = express.Router();

routes.post('/forms', InscricaoController.store);

export { routes };