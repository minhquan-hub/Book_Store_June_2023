import bcrypt from "bcrypt";
import { inject, injectable } from "inversify";
import { createMap, createMapper } from "@automapper/core";
import { pojos } from "@automapper/pojos";

import { IUserService } from "src/interfaces";
import { UserCreateDto, UserCreateResponseDto } from "../dtos";
import { mapper } from "../auto_mapper/auto_mapper_profile";
import { IUser, User } from "../models";
import APIError from "../error_handling/errors/api_error";

@injectable()
class UserService implements IUserService {
  constructor() {}

  async createUser(
    userCreateDto: UserCreateDto
  ): Promise<UserCreateResponseDto> {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(userCreateDto.password, salt);

      const newUser = mapper.map<UserCreateDto, IUser>(
        userCreateDto,
        "UserCreateDto",
        "IUser"
      );
      newUser.password = hashed;

      const user: IUser = await User.create(newUser);

      const userCreateResponseDto: UserCreateResponseDto = {
        id: user._id.toString(),
        email: user.email,
        phone: user.phone,
        role: user.role,
      };
      return userCreateResponseDto;
    } catch (error) {
      console.log(error);
      throw new APIError("Something wrong server");
    }
  }
}

export default UserService;
