import { container } from "tsyringe";
import { DataSource } from "typeorm";

import ClassSchema from "../../../modules/classes/infra/data/typeorm/schemas/class-schema";

export const AppDataSource = new DataSource({
  type: "mssql",
  host: "localhost",
  port: 1433,
  username: "sa",
  password: "passw@rd@,123W.!",
  database: "test",
  synchronize: true,
  logging: true,
  entities: [ClassSchema],
  subscribers: [],
  migrations: [],
  options: { encrypt: false },
});

const setupDataConnections = async () => {
  await AppDataSource.initialize();
  container.register<DataSource>(DataSource, { useValue: AppDataSource });
};

export { setupDataConnections };
