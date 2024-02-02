import clients from "../clients";
import { IUser } from "../types/user.interface";
class UserModel {
  /**
   * get user info by id
   * @param {number} id
   * @returns {Promise<IUser>}
   */
  static async findById(id: number): Promise<any> {
    try {
      const knexClient = clients.knex.getInstance();
      const builderUser = await knexClient<IUser, IUser[]>("users")
        .select("*")
        .where("id", id);
      const [user] = builderUser;
      return user;
    } catch (e: any) {
        throw new Error("Internal error: " + e?.message);
    }
  }
}

export default UserModel;
