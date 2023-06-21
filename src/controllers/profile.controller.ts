import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { profileSchema } from "../validations/profile.validation";

const prisma = new PrismaClient();

class ProfileController {
  public async show(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const student = await prisma.profile.findUnique({
        where: {
          id: +id,
        },
        select: {
          id: true,
          nisn: true,
          user: {
            select: {
              id: true,
              username: true,
              role: true,
            },
          },
        },
      });
      return res.status(200).json({ msg: "success", data: student });
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const { nisn, user_id } = req.body;
      const { error } = profileSchema.validate(req.body);
      if (error) {
        return res.status(400).json(error.details);
      }

      const profile = await prisma.profile.create({
        data: {
          nisn: nisn,
          user_id: user_id,
        },
      });

      return res.status(200).json({ msg: "success", data: profile });
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }
}

export default new ProfileController();
