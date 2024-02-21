import { Response } from "express";
import UploadServices from "../services/upload.service";

class UploadController {
  static uploadImage = async (req: any, res: Response) => {
    try {
      const result = await UploadServices.uploadImageToS3(req.file);
      return res.status(200).json(result);
    } catch (e: any) {
      return res.status(e.statusCode || 500).json({ error: e.message });
    }
  };
}

export default UploadController;
