import { Router } from "express";
// import { listar_produtos } from "./controllers/ProdutosController";
import { Request, Response } from "express";
import data_json from "./database/produtos.json";

const routes = Router();

// routes.get('/produtos', listar_produtos);
routes.get('/produtos', (request: Request, response: Response) => {
  return response.status(200).json(data_json);
});

export default routes;
