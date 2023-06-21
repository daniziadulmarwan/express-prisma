import { Router } from "express";
import profileController from "../controllers/profile.controller";

class ProfileRouter {
  private route: Router;

  get _route() {
    return this.route;
  }

  constructor() {
    this.route = Router();
    this.router();
  }

  public router() {
    this.route.get("/:id", profileController.show);
    this.route.post("/create", profileController.create);
  }
}

export default new ProfileRouter()._route;
