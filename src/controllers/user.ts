import { Response } from "express";
import UserServices from "../services/user.service";
import NOT_FOUND_ERROR from "../common/error/404";
class UserController {
  static getUser = (req: any, res: Response) => {
    // const rs = {
    //   name: "test",
    //   age: 24,
    // };
    // return res.json(rs);
    try{
    }
    catch(e: any){
      return res.status(e.statusCode || 500).json({ error: e.message });
    }
  };
  static getUserByEmail = async (req: any, res: Response) => {
    try {
      const { id } = req.params;
      const user = await UserServices.getUserById(id);
      return res.json({
        user,
      });
    } catch (e: any) {
      return res.status(e.statusCode || 500).json({ error: e.message });
    }
  };
}
export default UserController;
