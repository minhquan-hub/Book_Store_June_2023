import { createMap, createMapper, MappingProfile } from "@automapper/core";
import { IUser } from "src/models";
import { UserCreateDto } from "../dtos";

export const UserProfile: MappingProfile = (mapper) => {
  createMap<IUser, UserCreateDto>(mapper, "UserCreateDto", "IUser");
};
