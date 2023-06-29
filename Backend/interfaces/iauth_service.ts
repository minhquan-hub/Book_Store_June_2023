import { AuthDto, LoginRequestDto } from "dtos";

export interface IAuthService {
  loginUser(loginRequestDto: LoginRequestDto): Promise<AuthDto | undefined>;
}
