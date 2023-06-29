import bcrypt from 'bcrypt'
import { inject, injectable } from "inversify";
import { createMap, createMapper } from '@automapper/core';
import { pojos } from '@automapper/pojos';

import User, { IUser } from '../models/User'
import { UserCreateDto } from '../dtos/user/user_create_dto'
import { IUserService } from '../interfaces/iuser_service';
import { IAutoMapperService } from '../interfaces/iauto_mapper_service';
import TYPES from '../type';
import { mapper }  from '../auto_mapper/auto_mapper_profile'

@injectable()
class UserService implements IUserService {
    constructor() {}

    async createUser(userCreateDto: UserCreateDto) {
        const salt = await bcrypt.genSalt(10)
        const hashed = await bcrypt.hash(userCreateDto.password, salt)
        

        const newUser = mapper.map<UserCreateDto, IUser>(userCreateDto, 'UserCreateDto', 'IUser')
        newUser.password = hashed

        const user: IUser = await User.create(newUser)
        return user
    }
}


export default UserService