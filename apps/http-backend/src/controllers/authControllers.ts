import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../utils/env";


export const signUpController = (req: Request, res: Response) => {
  try {
    // TODO signup
    //db call
    res.json("Sign up endpoint");
  } catch (error) {
    res.status(500).json({ Error: "Internal Server Error" });
  }
};

export const signinController = (req: Request, res: Response) => {
    const {username, email, password} = req.body;
    const userId = "exampleUserId";
  try {
        // TODO sigin
    // needs user db find with email or username
    const token = jwt.sign({userId}, JWT_SECRET)
    res.status(200).json({token})
  } catch (error) {
    res.status(500).json({ Error: "Internal Server Error" });
  }
};
