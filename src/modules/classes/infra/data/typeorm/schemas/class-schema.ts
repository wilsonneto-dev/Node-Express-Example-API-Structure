import Class from "@modules/classes/domain/class/class";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("Class")
class ClassSchema {
  @Column("uuid")
  @PrimaryColumn()
  id: string;

  @Column()
  startDate: Date;

  @Column()
  vehicleId: number;

  @Column()
  studentId: number;

  @Column()
  instructorId: number;

  public static fromEntity(entity: Class) {
    return <ClassSchema>{
      id: entity.id,
      instructorId: entity.instructorId,
      startDate: entity.startDate,
      studentId: entity.studentId,
      vehicleId: entity.vehicleId,
    };
  }
}

export default ClassSchema;
