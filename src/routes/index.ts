import cors from "cors";
import { Application } from "express";
import UserRoutes from "./user.route";

export default (app: Application)=> {
    app.use(cors());
    UserRoutes(app);
}

