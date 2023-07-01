import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";

import APIError from "../error_handling/errors/api_error";

import TYPES from "../type";
import { IUserService } from "src/interfaces";

@injectable()
export class UserController {
  private _userService: IUserService;

  constructor(@inject(TYPES.IUserService) userService: IUserService) {
    this._userService = userService;
  }

  async postCreateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userCreateDto = req.body;

      const user = await this._userService.createUser(userCreateDto);
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }
}
