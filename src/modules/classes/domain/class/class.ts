import { v4 as uuidv4 } from "uuid";

class Class {
  private _id: string;
  public get id(): string {
    return this._id;
  }

  private _startDate: Date;
  public get startDate(): Date {
    return this._startDate;
  }

  private _vehicleId: number;
  public get vehicleId(): number {
    return this._vehicleId;
  }

  private _studentId: number;
  public get studentId(): number {
    return this._studentId;
  }

  private _instructorId: number;
  public get instructorId(): number {
    return this._instructorId;
  }

  public constructor(
    startDate: Date,
    vehicleId: number,
    studentId: number,
    instructorId: number,
    id: string | null = null
  ) {
    this._id = id ?? uuidv4();
    this._startDate = startDate;
    this._studentId = studentId;
    this._vehicleId = vehicleId;
    this._instructorId = instructorId;
  }
}

export default Class;
