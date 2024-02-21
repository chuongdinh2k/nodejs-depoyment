import { Application } from "express";
import UploadController from "../controllers/upload";
import multer from "multer";

const apiURLV1 = "/api/v1/upload";

const upload = multer();

export default (app: Application) => {
    app.post(`${apiURLV1}`, upload.single("image"), UploadController.uploadImage);
}