import { inject, injectable } from "tsyringe";

import IClassRepository from "../../domain/class/iclass-repository";

export interface IListClassesByStudentInputDTO {
  readonly studentId: number;
}

export interface IListClassesByStudentOutputItemDTO {
  readonly id: string;
  readonly startDate: Date;
  readonly vehicleId: number;
  readonly instructorId: number;
}

export interface IListClassesByStudentUseCase {
  execute(
    input: IListClassesByStudentInputDTO
  ): Promise<IListClassesByStudentOutputItemDTO[]>;
}

@injectable()
class ListClassesByStudentUseCase {
  constructor(
    @inject("ClassRepository") private readonly repository: IClassRepository
  ) {}

  async execute({
    studentId,
  }: IListClassesByStudentInputDTO): Promise<
    IListClassesByStudentOutputItemDTO[]
  > {
    const classes = await this.repository.findAllClassesByStudentId(studentId);
    return classes.map((classs) => ({
      id: classs.id,
      startDate: classs.startDate,
      vehicleId: classs.vehicleId,
      instructorId: classs.instructorId,
    }));
  }
}

export default ListClassesByStudentUseCase;
