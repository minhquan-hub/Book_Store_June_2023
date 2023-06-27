import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockService } from './mock.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CookieStorageService } from './services/cookie-storage.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    CookieStorageService,
    MockService,
  ]
})
export class SharedModule { }
