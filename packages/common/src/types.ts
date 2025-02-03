import { z } from "zod";

export const signUpSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string(),
});

export const signInSchema = z.object({
  username: z.string().min(3).max(20).optional(),
  email: z.string().email().optional(),
  password: z.string(),
});

export const createRoomSchema = z.object({
  username: z.string().min(3).max(20),
  //   password: z.string(),
});
