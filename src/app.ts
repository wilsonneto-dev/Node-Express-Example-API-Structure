import { config } from "dotenv";
import express from "express";

import router from "./modules/classes/api/router";

config();
const app = express();

app.use(express.json());

app.use(router);

app.listen(process.env.API_PORT, () =>
  console.log(`listenning on port ${process.env.API_PORT}...`)
);
