import express from "express";
import "dotenv/config";
import cors from "cors";
import router from "./router";

const app = express();

const port = process.env.EXPRESS_SERVER_PORT || 3000;
app.use(cors());
app.use(express.json());
app.use("/api", router);
app.listen(port, () => {
  console.info(`You server is running on http://localhost:${port}`);
});