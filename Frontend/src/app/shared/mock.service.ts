import { updateBook } from "./mock-data/update-book.mock";
import { register } from "./mock-data/register.mock";
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getAllBookMock } from './mock-data/get-all-book.mock';
import { login } from './mock-data/login.mock';

@Injectable({
  providedIn: 'root'
})
export class MockService implements InMemoryDbService {

  constructor() { }
  createDb() {
    return {getAllBookMock, login, register, updateBook};
  }
}
