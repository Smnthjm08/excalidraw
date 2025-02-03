import { Router, Request, Response } from "express";
import {
  signinController,
  signUpController,
} from "../controllers/authControllers";

const authRoutes: Router = Router(); // ✅ Explicitly define type

authRoutes.post("/signup", signUpController);
authRoutes.post("/signin", signinController);

export default authRoutes;
