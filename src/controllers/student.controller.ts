import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

class StudentController {
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const students = await prisma.user.findFirst({
        include: {
          posts: true,
          Profile: true,
        },
      });
      return res.status(200).json({ msg: "success", data: students });
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const { username, password, role } = req.body;
      if (username === "" || password === "") {
        return res.status(400).json("Username dan password tidak boleh kosong");
      }

      const student = await prisma.user.create({
        data: {
          username: username,
          password: await bcrypt.hash(password, 10),
          role: role,
        },
      });

      return res.status(200).json({ msg: "success", data: student });
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }
}

export default new StudentController();
