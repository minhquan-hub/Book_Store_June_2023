import { Request, Response } from "express";
import { inject, injectable } from "inversify";

import APIError from "../error_handling/errors/api_error";

import TYPES from "../type";
import { IUserService } from "interfaces";

@injectable()
export class UserController {
  private _userService: IUserService;

  constructor(@inject(TYPES.IUserService) userService: IUserService) {
    this._userService = userService;
  }

  async postCreateUser(req: Request, res: Response) {
    try {
      const userCreateDto = req.body;
      console.log(userCreateDto);
      const user = await this._userService.createUser(userCreateDto);
      res.status(200).json(user);
    } catch (err) {
      console.error(err);
      throw new APIError("Api Error");
    }
  }
}
