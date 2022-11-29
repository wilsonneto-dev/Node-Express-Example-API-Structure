import type { DependencyContainer } from "tsyringe";

import CreateClassUseCase, {
  ICreateClassUseCase,
} from "./application/use-cases/create-class";
import ListClassesByStudentUseCase, {
  IListClassesByStudentUseCase,
} from "./application/use-cases/list-classes-by-student";
import IClassRepository from "./domain/class/iclass-repository";
import ClassRepository from "./infra/data/typeorm/repositories/class-repository";

export class DI {
  public static register(container: DependencyContainer) {
    container.registerSingleton<IClassRepository>(
      "ClassRepository",
      ClassRepository
    );
    container.register<ICreateClassUseCase>(
      "CreateClassUseCase",
      CreateClassUseCase
    );
    container.register<IListClassesByStudentUseCase>(
      "ListClassesByStudentUseCase",
      ListClassesByStudentUseCase
    );
  }
}
