import { Request, Response } from "express";
import jwt, { sign } from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { signUpSchema, signInSchema } from "@repo/common/types";

export const signUpController = (req: Request, res: Response) => {
  try {
    // TODO signup
    //db call
    const data = signUpSchema.safeParse(req.body);
    if (!data.success) {
      res.status(400).json({ message: "Please enter valid inputs" });
    }

    res.status(200).json("Sign up endpoint");
  } catch (error) {
    res.status(500).json({ Error: "Internal Server Error" });
  }
};

export const signinController = (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const data = signInSchema.safeParse(req.body);
  const userId = "exampleUserId";
  try {
    // TODO sigin
    // needs user db find with email or username
    const token = jwt.sign({ userId }, JWT_SECRET);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ Error: "Internal Server Error" });
  }
};
