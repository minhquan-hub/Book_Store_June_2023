import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersModule } from './components/users/users.module';
import { CommonsModule } from './components/commons/commons.module';
import { AuthModule } from './components/auth/auth.module';
import { RouterModule } from '@angular/router';
import { AdminsModule } from './components/admins/admins.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockService } from './shared/mock.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonsModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    UsersModule,
    AuthModule,
    AdminsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
