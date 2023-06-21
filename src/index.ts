import express, { Application } from "express";
import cors from "cors";
import { config } from "dotenv";

// Routers
import studentRoute from "./routes/student.route";
import postRoute from "./routes/post.route";

// Configuration
config();

class App {
  private app: Application;

  get _app() {
    return this.app;
  }

  constructor() {
    this.app = express();
    this.plugins();
    this.routers();
  }

  public plugins(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.static("public"));
    this.app.use(cors());
  }

  public routers(): void {
    this.app.use("/api/v1/student", studentRoute);
    this.app.use("/api/v1/post", postRoute);
  }
}

const port: string = process.env.PORT || "5000";
const app: Application = new App()._app;
app.listen(port, () => console.log("App running at port " + port));
