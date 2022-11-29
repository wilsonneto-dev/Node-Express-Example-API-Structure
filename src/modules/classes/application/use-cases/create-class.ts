import { inject, injectable } from "tsyringe";

import Class from "../../domain/class/class";
import IClassRepository from "../../domain/class/iclass-repository";

export interface ICreateClassInputDTO {
  readonly startDate: Date;
  readonly vehicleId: number;
  readonly instructorId: number;
  studentId: number;
}

export interface ICreateClassOutputDTO {
  readonly id: string;
}

export interface ICreateClassUseCase {
  execute(input: ICreateClassInputDTO): Promise<ICreateClassOutputDTO>;
}

@injectable()
class CreateClassUseCase implements ICreateClassUseCase {
  constructor(
    @inject("ClassRepository") private repository: IClassRepository
  ) {}

  async execute({
    startDate,
    vehicleId,
    instructorId,
    studentId,
  }: ICreateClassInputDTO): Promise<ICreateClassOutputDTO> {
    const classs = new Class(startDate, vehicleId, studentId, instructorId);
    this.repository.save(classs);
    return { id: classs.id };
  }
}

export default CreateClassUseCase;
