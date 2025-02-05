import { createRoomSchema } from "@repo/common/schema";
import { prisma } from "@repo/db/client";
import { Request, Response } from "express";

export const createRoomController = async (req: Request, res: Response) => {
  try {
    const parsedData = createRoomSchema.safeParse(req.body);

    // @ts-ignore
    const adminId: string = "a6bbe78b-a653-407f-8f66-589c8c16176e";
    if (!parsedData.success) {
      res
        .status(400)
        .json({ error: "Invalid data", details: parsedData.error.format() });
      return;
    }

    const { slug } = parsedData.data;

    const slugExists = await prisma.room.findUnique({ where: { slug: slug } });
    if (slugExists) {
      res.status(400).json({ message: "Room with this name already exists" });
      return;
    }

    const room = await prisma.room.create({
      data: { slug: parsedData.data.slug, adminId: adminId },
    });

    res.status(201).json({ roomId: room.id });
  } catch (error) {
    res.status(500).json({ "Internal Server Error!": error });
  }
};
