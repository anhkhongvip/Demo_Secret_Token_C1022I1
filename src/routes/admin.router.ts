import express from "express";
import adminControllers from "../controllers/admin.controllers";
const adminRouter = express.Router();

adminRouter.get("/", adminControllers.adminPage);
export default adminRouter;