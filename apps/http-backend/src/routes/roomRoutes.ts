import { Router, Router as ExpressRouter } from "express";
import { middleware } from "../middlewares/authMiddleware";
import { createRoomController } from "../controllers/roomControllers";

const roomRoutes: ExpressRouter = Router();

roomRoutes.post("/", middleware, createRoomController);

export default roomRoutes;
