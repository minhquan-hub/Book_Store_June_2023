import { Container } from "inversify";
import "reflect-metadata";

import { IAuthService } from "./src/interfaces/iauth_service";
import { IBookService } from "./src/interfaces/ibook_service";
import { IUserService } from "./src/interfaces/iuser_service";
import AuthService from "./src/services/auth_service";
import BookService from "./src/services/book_service";
// import BookService from './services/book_service';
import UserService from "./src/services/user_service";
import TYPES from "./type";

const container = new Container();
container.bind<IUserService>(TYPES.IUserService).to(UserService);
container.bind<IAuthService>(TYPES.IAuthService).to(AuthService);
container.bind<IBookService>(TYPES.IBookService).to(BookService);

export { container };
