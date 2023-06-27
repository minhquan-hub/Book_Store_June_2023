import { CookieStorageService } from "./cookie-storage.service";
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient, private cookieStorageService: CookieStorageService) {}

  public getAllBooks(): Observable<any> {
    return this.http.get(environment.book.getAllBook);
  }

  public getBookById(id: string): Observable<any> {
    return this.http.get(environment.book.updateBook, this.cookieStorageService.addToken());
  }

  public createBook(data: any): Observable<any> {
    return this.http.post('/book',data,this.cookieStorageService.addToken());
  }

  public updateBook(id: string, data: any): Observable<any> {
    return this.http.put(`/book/${id}`, data, this.cookieStorageService.addToken());
  }

  public deleteBook(id: string): Observable<any> {
    return this.http.delete(`/book/${id}`, this.cookieStorageService.addToken());
  }
}
