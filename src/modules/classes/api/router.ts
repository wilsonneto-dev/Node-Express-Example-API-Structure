import { Router } from "express";

import CreateClassUseCase from "../application/use-cases/create-class";
import ListClassesByStudentUseCase from "../application/use-cases/list-classes-by-student";
import ClassRepositoryInMemory from "../infra/class-repository-inmemory";

const router = Router();

const classRepository = new ClassRepositoryInMemory();

router.post("/classes", async (req, res) => {
  const useCase = new CreateClassUseCase(classRepository);
  const output = await useCase.execute(req.body);
  res.status(201).json(output);
});

router.get("/students/:studentId/classes", async (req, res) => {
  const { studentId } = req.params as { studentId: string };
  if (!studentId)
    return res.status(400).json({ error: "studentId is required" }).end();
  const useCase = new ListClassesByStudentUseCase(classRepository);
  const output = await useCase.execute({ studentId: Number(studentId) });
  return res.status(201).json(output);
});

export default router;
