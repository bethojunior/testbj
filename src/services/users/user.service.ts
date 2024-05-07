import UserRepository from "../../repositories/users/user.repository";

export default class UserService{
  async findAll(data : any){
    const userRepository = new UserRepository();
    return await userRepository.create(data);
  }
}