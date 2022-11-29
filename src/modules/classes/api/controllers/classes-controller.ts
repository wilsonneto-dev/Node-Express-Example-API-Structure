import { Request, Response } from "express";
import { injectable, inject } from "tsyringe";

import { ICreateClassUseCase } from "../../application/use-cases/create-class";
import { IListClassesByStudentUseCase } from "../../application/use-cases/list-classes-by-student";

@injectable()
class ClassesController {
  constructor(
    @inject("CreateClassUseCase")
    private createClassUseCase: ICreateClassUseCase,
    @inject("ListClassesByStudentUseCase")
    private listClassesByStudentUseCase: IListClassesByStudentUseCase
  ) {}

  async createClass(req: Request, res: Response) {
    const output = await this.createClassUseCase.execute(req.body);
    res.status(201).json(output);
  }

  async listClassesByStudent(req: Request, res: Response) {
    const { studentId } = req.query as { studentId: string };
    if (!studentId)
      return res.status(400).json({ error: "studentId is required" }).end();
    const output = await this.listClassesByStudentUseCase.execute({
      studentId: Number(studentId),
    });
    return res.status(201).json(output);
  }
}

export default ClassesController;
