import cors from "cors";
import { Application } from "express";
import UserRoutes from "./user.route";
import UploadRoutes from "./upload.route";

export default (app: Application) => {
  app.use(cors());
  UserRoutes(app);
  UploadRoutes(app);
};
