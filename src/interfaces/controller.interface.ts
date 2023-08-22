import { Request, Response } from "express";

interface IController {
  index?: (req: Request, res: Response) => {};
  show?: (req: Request, res: Response) => {};
  create: (req: Request, res: Response) => {};
  post?: (req: Request, res: Response) => {};
  edit?: (req: Request, res: Response) => {};
  update?: (req: Request, res: Response) => {};
  delete?: (req: Request, res: Response) => {};
}

export default IController;
