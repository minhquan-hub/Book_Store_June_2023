import APIError from "../error_handling/errors/http_400_error";
import { Request, Response } from "express";

import { inject, injectable } from "inversify";
import TYPES from "../type";
import { IAuthService } from "interfaces";

@injectable()
export class AuthController {
  private _authService: IAuthService;

  constructor(@inject(TYPES.IAuthService) authService: IAuthService) {
    this._authService = authService;
  }

  async loginUser(req: Request, res: Response) {
    try {
      const loginRequestDto = req.body;
      return res
        .status(200)
        .json(await this._authService.loginUser(loginRequestDto));
    } catch (err) {
      console.log(err);
      throw new APIError("Api Error");
    }
  }
}
