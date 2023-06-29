import { Request, Response} from 'express';
import { StatusCodes } from 'http-status-codes';
import { inject } from "inversify";
import { interfaces, controller, httpGet, httpPost, request, response } from "inversify-express-utils";

import APIError from '../error_handling/errors/api_error'
import { IUserService } from '../interfaces/iuser_service';
import TYPES from '../type';

@controller("/user")
class UserController implements interfaces.Controller {
    private _userService: IUserService

    constructor(@inject(TYPES.IUserService) userService: IUserService) {
        this._userService = userService;
    }

    @httpPost("/")
    async postCreateUser(req: Request, res: Response) {
        try {
            const userCreateDto = req.body;
            const user = await this._userService.createUser(userCreateDto)
            res.status(StatusCodes.OK).json(user)
        } catch (err) {
            console.error(err)
            throw new APIError('Api Error')
        }
    }
}

export default  UserController