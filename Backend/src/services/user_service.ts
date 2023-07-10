import bcrypt from "bcrypt";
import { inject, injectable } from "inversify";
import { createMap, createMapper } from "@automapper/core";
import { pojos } from "@automapper/pojos";

import { IKafkaService, IUserService } from "src/interfaces";
import { UserCreateDto, UserCreateResponseDto } from "../dtos";
import { mapper } from "../auto_mapper/auto_mapper_profile";
import { IUser, User } from "../models";
import APIError from "../error_handling/errors/api_error";
import TYPES from "../type";

@injectable()
class UserService implements IUserService {
  private _kafkaService: IKafkaService;

  constructor(@inject(TYPES.IKafkaService) kafkaService: IKafkaService) {
    this._kafkaService = kafkaService;
  }

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

      if (user != null) {
        this._kafkaService.sendMessage("Create User", user._id.toString());
      }

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
