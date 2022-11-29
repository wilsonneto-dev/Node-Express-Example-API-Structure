import "reflect-metadata";
import { config } from "dotenv";
import express from "express";
import { container } from "tsyringe";

import { getClassesRouter } from "./modules/classes/api/router";
import { DI } from "./modules/classes/DI";
import { setupDataConnections } from "./shared/infra/typeorm/data-source";

config();
DI.register(container);
const app = express();

app.use(express.json());

const readyPromise = setupDataConnections().then(() => {
  app.use("/classes", getClassesRouter());
  app.listen(process.env.API_PORT ?? 8080, () =>
    console.log(`listenning on port ${process.env.API_PORT ?? 8080}...`)
  );
});

export { readyPromise, app };
