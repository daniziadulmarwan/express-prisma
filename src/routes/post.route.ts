import { Router } from "express";
import postController from "../controllers/post.controller";

class PostRouter {
  private route: Router;

  get _route() {
    return this.route;
  }

  constructor() {
    this.route = Router();
    this.router();
  }

  public router() {
    this.route.post("/create", postController.create);
  }
}

export default new PostRouter()._route;
