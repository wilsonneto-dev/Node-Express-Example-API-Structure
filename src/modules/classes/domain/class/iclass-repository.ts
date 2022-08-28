import Class from "./class";

interface IClassRepository {
  save(aula: Class): Promise<void>;
  findAllClassesByStudentId(studentId: number): Promise<Class[]>;
}

export default IClassRepository;
