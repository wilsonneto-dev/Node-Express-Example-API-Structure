import { v4 as uuidv4 } from "uuid";

class Class {
  public readonly id: string;

  constructor(
    public readonly startDate: Date,
    public readonly vehicleId: number,
    public readonly studentId: number,
    public readonly instructorId: number
  ) {
    this.id = uuidv4();
  }
}

export default Class;
