import UserService from "../../services/users/user.service";

export default class UserController {
  async store(data: any) {
    const userService = new UserService();
    return await userService.store(data);
  }
  async list() {
    const userService = new UserService();
    return await userService.list();
  }
}