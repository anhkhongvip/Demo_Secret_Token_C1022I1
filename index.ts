import cookieParser from 'cookie-parser';
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { connectDB } from "./src/configs/data-source";
import route from "./src/routes";
import * as dotenv from "dotenv";
const PORT = 3000;
const app = express();

dotenv.config();

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(bodyParser.json());
app.use(cookieParser(process.env.USER_CODE_SECRET));
connectDB();

route(app);

app.listen(PORT, () => {
  console.log("App running on port: " + PORT);
});
