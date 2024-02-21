import NOT_FOUND_ERROR from "../common/error/404";
import UserModel from "../models/user.model";

class UserServices {
  /**
   * get user info by id
   * @param {number} id
   * @returns {Promise<IUser>}
   */

  static async getUserById(id: number): Promise<any> {
    const user = await UserModel.findById(id);
    if (!user) {
      throw new  NOT_FOUND_ERROR(`User with ID: ${id} not found`);
    }
    return user;
  }
}

export default UserServices;
