import { CookieStorageService } from './cookie-storage.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Book } from 'src/app/models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(
    private http: HttpClient,
    private cookieStorageService: CookieStorageService
  ) {}

  public getAllBooks(page: number, limit: number): Observable<any> {
    const pathUrl = `${environment.book.getAllBook}?page=${page}&limit=${limit}`;
    return this.http.get<any>(pathUrl);
  }

  public getBookById(id: string): Observable<Book> {
    const pathUrl = `${environment.book.getBookById}/${id}`;
    return this.http.get<Book>(pathUrl, this.cookieStorageService.getToken());
  }

  public createBook(data: any): Observable<Book> {
    const pathUrl = environment.book.createBook;
    return this.http.post<Book>(
      pathUrl,
      data,
      this.cookieStorageService.getToken()
    );
  }

  public updateBook(id: string, data: any): Observable<any> {
    const pathUrl = `${environment.book.updateBook}/${id}`;
    return this.http.put<any>(
      pathUrl,
      data,
      this.cookieStorageService.getToken()
    );
  }

  public deleteBook(id: string | undefined): Observable<any> {
    const pathUrl = `${environment.book.deleteBook}/${id}`;
    return this.http.delete<any>(pathUrl, this.cookieStorageService.getToken());
  }
}
