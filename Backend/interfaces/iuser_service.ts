import { UserCreateDto } from '../dtos/user/user_create_dto'
import { IUser } from '../models/User'

export interface IUserService {
    createUser(userCreateDto: UserCreateDto) : Promise<IUser>;
}