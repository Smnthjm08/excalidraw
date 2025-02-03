import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../utils/env";

export function middleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers["authorization"] ?? "";

  const decoded = jwt.verify(token, JWT_SECRET);

  if (decoded) {
    //@ts-ignore TODO middleware complete fix
    req.userId = decoded.userId;
    next();
    //   if (decoded?.userId) {
  } else {
    res.status(403).json({ message: "Unauthorized" });
  }
}
