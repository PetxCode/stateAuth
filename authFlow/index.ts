import express, { Application } from "express";
import cors from "cors";
import dotEnv from "dotenv";
import { dbConfig } from "./utils/dbConfig";
dotEnv.config();
import { mainApp } from "./mainApp";

const app: Application = express();
const port: number = parseInt(process.env.PORT!);

app.use(express.json());
app.use(cors());

mainApp(app);
app.listen(port, () => {
  console.log();
  dbConfig();
});
