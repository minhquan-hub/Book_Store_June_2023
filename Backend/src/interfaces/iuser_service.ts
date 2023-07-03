import { UserCreateDto, UserCreateResponseDto } from "../dtos";
import { IUser } from "src/models";

export interface IUserService {
  createUser(userCreateDto: UserCreateDto): Promise<UserCreateResponseDto>;
}
