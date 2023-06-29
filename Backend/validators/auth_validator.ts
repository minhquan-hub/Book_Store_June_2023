import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { check, validationResult } from "express-validator";
import Http400Error from "../error_handling/errors/http_400_error";

class AuthValidator {
  async LoginRequestDtoValidation(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      await check("email")
        .not()
        .isEmpty()
        .withMessage("The email mu st be valid")
        .run(req);
      await check("password")
        .not()
        .isEmpty()
        .withMessage("The password must be valid")
        .run(req);

      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ errors: result.array() });
      } else {
        next();
      }
    } catch (err) {
      console.error(err);
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json("Something wrong at the validation");
    }
  }
}

export default new AuthValidator();
