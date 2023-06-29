import { addProfile, CamelCaseNamingConvention, createMap, createMapper, extend, namingConventions } from '@automapper/core';
import { pojos } from '@automapper/pojos';

import { UserCreateDto } from '../dtos/user/user_create_dto';
import { IUser } from '../models/User'
import { UserProfile } from '../auto_mapper/user_profile'
import AutoMapperService from '../services/auto_mapper'
import { BookProfile } from './book_profile';

AutoMapperService.mapperUserAndUserCreateDto()
AutoMapperService.mapperBookAndBookDto()

export const mapper = createMapper({ strategyInitializer: pojos() })

addProfile(
    mapper,
    UserProfile,
    namingConventions(new CamelCaseNamingConvention())
)

addProfile(
    mapper, 
    BookProfile,
    namingConventions(new CamelCaseNamingConvention())
)





