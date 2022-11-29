import { injectable } from "tsyringe";

import Class from "../../../domain/class/class";
import IClassRepository from "../../../domain/class/iclass-repository";

@injectable()
class ClassRepositoryInMemory implements IClassRepository {
  private classes: Class[] = [];

  save(aula: Class): Promise<void> {
    this.classes.push(aula);
    return Promise.resolve();
  }

  findAllClassesByStudentId(studentId: number): Promise<Class[]> {
    const classes = this.classes.filter((aula) => aula.studentId === studentId);
    return Promise.resolve(classes);
  }
}

export default ClassRepositoryInMemory;
