import express, { Response , Request, NextFunction} from "express";
import data from "../../backend.json";


const repos = express.Router();

const validateRepo = (req: Request, _: Response, next: NextFunction) => {
  console.log(req.body);
  next();
};
repos.get("/", (_, res: Response) => {
  res.status(200).json(data);
});
repos.get("/:reposid" , (req: Request, res: Response) => {
  const repo = data.find((rep) => rep.id === req.params.reposid)  

  if (repo) {
    res.status(200).json(repo);
  } else {
    res.sendStatus(404);
  }
});

repos.post("/" , (req, res) => {
  const newId = Math.ceil(Math.random() * 100000).toString();
  data.push({ ...req.body, id: newId });
  res.status(201).json({ id: newId });
});
export default repos; 
// applique une route vers les données du repo