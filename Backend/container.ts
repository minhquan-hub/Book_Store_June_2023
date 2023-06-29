import { Container } from 'inversify'
import 'reflect-metadata'

import { IAuthService } from './interfaces/iauth_service';
import { IBookService } from './interfaces/ibook_service';
import { IUserService } from './interfaces/iuser_service';
import AuthService from './services/auth_service';
import BookService from './services/book_service';
// import BookService from './services/book_service';
import UserService from './services/user_service'
import TYPES from './type';

const container = new Container()
container.bind<IUserService>(TYPES.IUserService).to(UserService)
container.bind<IAuthService>(TYPES.IAuthService).to(AuthService)
container.bind<IBookService>(TYPES.IBookService).to(BookService)

export { container } 