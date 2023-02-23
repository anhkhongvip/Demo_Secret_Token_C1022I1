import express from "express";
import homeControllers from "../controllers/home.controllers";
const authRouter = express.Router();

authRouter.get("/login", homeControllers.loginPage);
authRouter.get("/register", homeControllers.registerPage);
export default authRouter;