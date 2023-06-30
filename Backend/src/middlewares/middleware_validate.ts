import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import { Request, Response, NextFunction } from "express";

class MiddlewareValidate {
  constructor() {}
  verifyToken(req: Request, res: Response, next: NextFunction) {
    const token: string = req.headers.authorization;
    if (token) {
      const accessToken: string = token.split(" ")[1];
      console.log(accessToken);
      jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
        if (err) {
          return res.status(StatusCodes.FORBIDDEN).json("Token is not valid!");
        }
        req["user"] = user;
        next();
      });
    } else {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json("You're not authenticated!");
    }
  }

  verifyTokenAndIsAdmin(req: Request, res: Response, next: NextFunction) {
    const token: string = req.headers.authorization;

    if (token) {
      const accessToken: string = token.split(" ")[1];
      console.log(accessToken);
      jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
        if (err) {
          return res.status(StatusCodes.FORBIDDEN).json("Token is not valid!");
        }

        if (user["role"] == "Admin") {
          next();
        } else {
          return res.status(403).json("You're not allowed");
        }
      });
    } else {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json("You're not authenticated!");
    }
  }
}

export default new MiddlewareValidate();
