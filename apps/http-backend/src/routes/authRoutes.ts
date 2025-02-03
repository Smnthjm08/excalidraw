import { Router, Router as ExpressRouter } from "express";
import {
  signinController,
  signUpController,
} from "../controllers/authControllers";

const authRoutes: ExpressRouter = Router();

authRoutes.post("/signup", signUpController);
authRoutes.post("/signin", signinController);

export default authRoutes;
