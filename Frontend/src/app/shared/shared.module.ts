import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockService } from './mock.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CookieStorageService } from './services/cookie-storage.service';
import { BrowserModule } from '@angular/platform-browser';
import { BookService } from './services/book.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MockService, {
      passThruUnknownUrl: true,
      delay: 200,
    }),
    RouterModule,
  ],
  providers: [CookieStorageService, MockService, AuthService, BookService],
})
export class SharedModule {}
