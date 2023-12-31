import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { injectable } from "inversify";

import { IUser, User } from "../models";
import { AuthDto, LoginRequestDto } from "../dtos";
import { IAuthService } from "src/interfaces";

let authDto: AuthDto = {
  email: "",
  roleName: "",
  token: "",
  isSuccess: false,
};

@injectable()
class AuthService implements IAuthService {
  constructor() {}

  generateAccessToken(user: IUser) {
    return jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_ACCESS_KEY as string,
      {
        expiresIn: "20m",
      }
    );
  }

  async loginUser(
    loginRequestDto: LoginRequestDto
  ): Promise<AuthDto | undefined> {
    const user = await User.findOne({ email: loginRequestDto.email });
    if (!user) return authDto;

    const validPassword = await bcrypt
      .compare(loginRequestDto.password, user.password)
      .then((valid) => {
        return valid;
      })
      .catch((err) => {
        console.error("Error: " + err);
      });

    if (user && validPassword) {
      const token = this.generateAccessToken(user);

      authDto = {
        email: user.email,
        roleName: user.role,
        token: token,
        isSuccess: true,
      };

      return authDto;
    }
  }
}

export default AuthService;
