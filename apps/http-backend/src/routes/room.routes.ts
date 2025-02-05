import { Router, Router as ExpressRouter } from "express";
import { middleware } from "../middlewares/auth.middleware";
import { createRoomController } from "../controllers/room.controllers";

const roomRoutes: ExpressRouter = Router();

roomRoutes.post("/", createRoomController);
// roomRoutes.post("/", middleware, createRoomController);

export default roomRoutes;
