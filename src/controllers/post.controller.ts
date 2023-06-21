import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class PostController {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const { title, description, author_id } = req.body;
      if (title === "" || description === "") {
        return res.status(400).json("Title dan description tidak boleh kosong");
      }

      const post = await prisma.post.create({
        data: {
          title: title,
          description: description,
          author_id: author_id,
        },
      });

      return res.status(200).json({ msg: "success", data: post });
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }
}

export default new PostController();
