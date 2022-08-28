import Class from "../../domain/class/class";
import IClassRepository from "../../domain/class/iclass-repository";

interface ICreateClassInputDTO {
  readonly startDate: Date;
  readonly vehicleId: number;
  readonly instructorId: number;
  studentId: number;
}

interface ICreateClassOutputDTO {
  readonly id: string;
}

class CreateClassUseCase {
  constructor(private repository: IClassRepository) {}

  async execute({
    startDate,
    vehicleId,
    instructorId,
    studentId,
  }: ICreateClassInputDTO): Promise<ICreateClassOutputDTO> {
    const aula = new Class(startDate, vehicleId, studentId, instructorId);
    this.repository.save(aula);
    return { id: aula.id };
  }
}

export default CreateClassUseCase;
