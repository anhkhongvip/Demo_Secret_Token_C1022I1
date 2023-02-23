import "reflect-metadata";
import { User } from "../models/User";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "1234",
  database: "demo_secret_token",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: ["./dist/src/migrations/*.js"],
});

async function connectDB() {
  try {
    let connect = await AppDataSource.initialize();
    if (connect) {
      console.log("Connect DB success");
    } else {
      console.log("Connect DB fail");
    }
  } catch (error) {
    console.log(error);
  }
}

export {connectDB, AppDataSource}
