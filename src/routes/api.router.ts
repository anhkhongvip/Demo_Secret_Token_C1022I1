import express from "express";
import userControllers from "../controllers/user.controllers";
const apiRouter = express.Router();

apiRouter.post("/register", userControllers.register);
apiRouter.post("/login", userControllers.login);
export default apiRouter;