import { UserCreateDto } from "dtos";
import { IUser } from "models";

export interface IUserService {
  createUser(userCreateDto: UserCreateDto): Promise<IUser>;
}
