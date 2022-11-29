import { injectable } from "tsyringe";
import { DataSource, Repository } from "typeorm";

import Class from "../../../../domain/class/class";
import IClassRepository from "../../../../domain/class/iclass-repository";
import ClassSchema from "../schemas/class-schema";

@injectable()
class ClassRepositoryInMemory implements IClassRepository {
  private readonly _ormReporitory: Repository<ClassSchema>;

  constructor(dataSource: DataSource) {
    this._ormReporitory = dataSource.getRepository(ClassSchema);
  }

  async save(classs: Class): Promise<void> {
    await this._ormReporitory.save(ClassSchema.fromEntity(classs));
  }

  async findAllClassesByStudentId(studentId: number): Promise<Class[]> {
    const classesSchema = await this._ormReporitory.find({
      where: { studentId },
    });
    return classesSchema.map(
      (schema) =>
        new Class(
          schema.startDate,
          schema.vehicleId,
          schema.studentId,
          schema.instructorId,
          schema.id
        )
    );
  }
}

export default ClassRepositoryInMemory;
