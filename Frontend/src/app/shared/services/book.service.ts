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
    const pathUrl = environment.book.getAllBook;
    return this.http.get<any>(pathUrl);
  }

  public getBookById(id: string): Observable<any> {
    const pathUrl = `${environment.book.getBookById}/${id}`;
    return this.http.get(pathUrl, this.cookieStorageService.addToken());
  }

  public createBook(data: any): Observable<any> {
    const pathUrl = environment.book.createBook;
    return this.http.post(pathUrl, data, this.cookieStorageService.addToken());
  }

  public updateBook(id: string, data: any): Observable<any> {
    const pathUrl = `${environment.book.updateBook}/${id}`;
    return this.http.put(pathUrl, data, this.cookieStorageService.addToken());
  }

  public deleteBook(id: string): Observable<any> {
    const pathUrl = `${environment.book.deleteBook}/${id}`;
    return this.http.delete(pathUrl, this.cookieStorageService.addToken());
  }
}
