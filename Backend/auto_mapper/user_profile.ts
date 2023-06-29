import { createMap, createMapper, MappingProfile } from "@automapper/core";
import { IUser }  from '../models/User'
import { UserCreateDto }  from '../dtos/user/user_create_dto'

export const UserProfile: MappingProfile = (mapper) => {

    createMap<IUser, UserCreateDto>(
        mapper,
        'UserCreateDto',
        'IUser'
    )
}

