import {
  addProfile,
  CamelCaseNamingConvention,
  createMap,
  createMapper,
  extend,
  namingConventions,
} from "@automapper/core";
import { pojos } from "@automapper/pojos";

import { UserCreateDto } from "../dtos";
import { IUser } from "../models";
import { UserProfile } from "./user_profile";
import AutoMapperService from "../services/auto_mapper";
import { BookProfile } from "./book_profile";

AutoMapperService.mapperUserAndUserCreateDto();
AutoMapperService.mapperBookAndBookDto();

export const mapper = createMapper({ strategyInitializer: pojos() });

addProfile(
  mapper,
  UserProfile,
  namingConventions(new CamelCaseNamingConvention())
);

addProfile(
  mapper,
  BookProfile,
  namingConventions(new CamelCaseNamingConvention())
);
