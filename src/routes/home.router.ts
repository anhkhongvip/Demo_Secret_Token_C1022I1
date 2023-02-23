import express from "express";
import homeControllers from "../controllers/home.controllers";
const homeRouter = express.Router();

homeRouter.get("/", homeControllers.homePage);
export default homeRouter;
