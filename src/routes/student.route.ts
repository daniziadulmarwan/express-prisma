import { Router } from "express";
import studentController from "../controllers/student.controller";

class StudentRouter {
  private route: Router;

  get _route() {
    return this.route;
  }

  constructor() {
    this.route = Router();
    this.router();
  }

  public router() {
    this.route.get("/", studentController.index);
    this.route.post("/create", studentController.create);
  }
}

export default new StudentRouter()._route;
