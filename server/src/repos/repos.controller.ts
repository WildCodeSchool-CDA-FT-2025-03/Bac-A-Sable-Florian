import express, { Response } from "express";
import data from "../../backend.json";

const repos = express.Router();

repos.get("/", (_, res: Response) => {
  res.status(200).json(data);
});

export default repos; 
// applique une route vers les données du repo