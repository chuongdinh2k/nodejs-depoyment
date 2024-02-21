import { Application } from "express";
import UserController from "../controllers/user";

const apiURLV1 = "/api/v1/users";

export default (app: Application) => {
    app.get(`${apiURLV1}`, UserController.getUser);
    app.get(`${apiURLV1}/:id`, UserController.getUserByEmail);
  };
  