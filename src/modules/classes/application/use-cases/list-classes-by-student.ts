import IClassRepository from "@modules/classes/domain/class/iclass-repository";

interface IListClassesByStudentInputDTO {
  readonly studentId: number;
}

interface IListClassesByStudentOutputItemDTO {
  readonly id: string;
  readonly startDate: Date;
  readonly vehicleId: number;
  readonly instructorId: number;
}

class ListClassesByStudentUseCase {
  constructor(private readonly repository: IClassRepository) {}

  async execute({
    studentId,
  }: IListClassesByStudentInputDTO): Promise<
    IListClassesByStudentOutputItemDTO[]
  > {
    const classes = await this.repository.findAllClassesByStudentId(studentId);
    return classes.map((aula) => ({
      id: aula.id,
      startDate: aula.startDate,
      vehicleId: aula.vehicleId,
      instructorId: aula.instructorId,
    }));
  }
}

export default ListClassesByStudentUseCase;
