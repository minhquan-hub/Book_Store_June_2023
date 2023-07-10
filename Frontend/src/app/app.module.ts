import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersModule } from './components/users/users.module';
import { CommonsModule } from './components/commons/commons.module';
import { RouterModule } from '@angular/router';
import { AdminsModule } from './components/admins/admins.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockService } from './shared/mock.service';
import { SharedModule } from './shared/shared.module';
import {
  AbstractSecurityStorage,
  AuthModule,
  LogLevel,
} from 'angular-auth-oidc-client';
import { LocalStorageService } from './shared/services/local-storage.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonsModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    UsersModule,
    AdminsModule,
    ReactiveFormsModule,
    RouterModule,
    AuthModule.forRoot({
      config: {
        configId: 'book-store',
        authority: 'http://localhost:8080/realms/quan-realm',
        redirectUrl: 'http://localhost:4200/',
        postLogoutRedirectUri: 'http://localhost:4200/',
        clientId: 'book-store',
        scope: 'openid profile email offline_access', // 'openid profile ' + your scopes
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        storage: new LocalStorageService(),
        customParamsAuthRequest: {
          client_secret: 'm5fGtGGnKoiXcLBhYDdLto3qIZlvAHV8',
        },
        customParamsCodeRequest: {
          client_secret: 'm5fGtGGnKoiXcLBhYDdLto3qIZlvAHV8',
        },
      },
    }),
  ],
  providers: [
    { provide: AbstractSecurityStorage, useClass: LocalStorageService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
