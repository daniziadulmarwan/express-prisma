import { Router } from "express";
import studentController from "../controllers/student.controller";
import IRouter from "../interfaces/router.interface";

class StudentRouter implements IRouter {
  public route: Router;

  get _route() {
    return this.route;
  }

  constructor() {
    this.route = Router();
    this.router();
  }

  public router(): void {
    this.route.get("/", studentController.index);
    this.route.post("/create", studentController.create);
  }
}

export default new StudentRouter()._route;
