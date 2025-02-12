import { Router, Router as ExpressRouter } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { createRoomController } from "../controllers/room.controllers";

const roomRoutes: ExpressRouter = Router();

roomRoutes.post("/", authMiddleware, createRoomController);

export default roomRoutes;
