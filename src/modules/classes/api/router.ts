import { Router } from "express";
import { container } from "tsyringe";

import ClassesController from "./controllers/classes-controller";

function getClassesRouter() {
  const router = Router();
  const classesController = container.resolve(ClassesController);

  router
    .post("/", async (req, res) => classesController.createClass(req, res))
    .get("/", async (req, res) =>
      classesController.listClassesByStudent(req, res)
    );

  return router;
}

export { getClassesRouter };
