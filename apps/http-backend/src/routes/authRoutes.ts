import { Router, Request, Response } from "express";
import { signinController, signUpController } from '../controllers/authControllers';

const authRoutes: Router = Router();

authRoutes.post("/signup", signinController);
authRoutes.post("/signin", signUpController);

export default authRoutes;
