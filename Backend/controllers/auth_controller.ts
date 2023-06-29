import { Request, Response} from 'express';
import { StatusCodes } from 'http-status-codes';

import APIError from '../error_handling/errors/api_error'
import { inject, injectable } from 'inversify';
import TYPES from '../type';
import { IAuthService } from '../interfaces/iauth_service';
import AuthValidator from '../validators/auth_validator';

@injectable()
export class AuthController {
    private _authService: IAuthService;

    constructor(@inject(TYPES.IAuthService) authService: IAuthService) {
        this._authService = authService;
    }

    async loginUser(req: Request, res: Response) {
        try {
            const loginRequestDto = req.body;
            return res.status(StatusCodes.OK).json(await this._authService.loginUser(loginRequestDto));
        }
        catch (err) {
            console.log(err);
            throw new APIError('Api Error');
        }
    }
}
