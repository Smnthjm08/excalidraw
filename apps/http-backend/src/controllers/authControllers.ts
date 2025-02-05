import { Request, Response } from "express";
import jwt, { sign } from "jsonwebtoken";
import { signUpSchema, signInSchema } from "@repo/common/types";
import { prisma } from "@repo/db/client";
import { JWT_SECRET } from "@repo/backend-common/config"

// const JWT_SECRET = "cfegbuhndijwxms";

export const signUpController = (req: Request, res: Response) => {
  try {
    // TODO signup
    //db call
    // const data = signUpSchema.safeParse(req.body);
    // if (!data.success) {
    //   res.status(400).json({ message: "Please enter valid inputs" });
    // }
    // const parsedData = signUpSchema.safeParse(req.body);

    // res.status(200).json(parsedData);
  } catch (error) {
    res.status(500).json({ Error: "Internal Server Error" });
  }
};

export const signinController = (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  // const data = signInSchema.safeParse(req.body);
  const userId = "exampleUserId";
  try {
    // TODO sigin
    // needs user db find with email or username
    // if (!JWT_SECRET) return;
    // console.log("JWT_SECRET", JWT_SECRET);
    // const token = jwt.sign({ userId }, JWT_SECRET);
    // res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ Error: "Internal Server Error" });
  }
};
