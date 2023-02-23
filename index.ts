import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { connectDB } from "./src/configs/data-source";
import route from "./src/routes";

const PORT = 3000;
const app = express();

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(bodyParser.json());
connectDB();

route(app);

app.listen(PORT, () => {
  console.log("App running on port: " + PORT);
});
