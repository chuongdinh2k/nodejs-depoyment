import { Response } from "express";
import UserServices from "../services/user.service";
class UserController {
  static getUser = (req: any, res: Response) => {
    const rs = {
      name: "test",
      age: 24,
    };
    return res.json(rs);
  };
  static getUserByEmail = async (req: any, res: Response) => {
    try {
      const { id } = req.params;
      const user = await UserServices.getUserById(id);
      return res.json({
        user,
      });
    } catch (e: any) {
      return res.status(500).json({
        message: e.message,
      });
    }
  };
}

export default UserController;
