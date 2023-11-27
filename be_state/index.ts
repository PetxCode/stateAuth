import express, { Application } from "express";
import cors from "cors";
import { mainApp } from "./mainApp";
import { dbConfig } from "./utils/dbConfig";

const port: number | string = process.env.PORT || 3344;
const app: Application = express();

app.use(cors());
app.use(express.json());

mainApp(app);
app.listen(port, () => {
  dbConfig();
});
