import { Request, Response } from "express";
import data_json from "../database/produtos.json";

export async function listar_produtos(request: Request, response: Response) {
  return response.status(200).json(data_json);
}
