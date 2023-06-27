import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersModule } from './components/users/users.module';
import { CommonsModule } from './components/commons/commons.module';
import { AuthModule } from './components/auth/auth.module';
import { RouterModule } from '@angular/router';
import { AdminsModule } from './components/admins/admins.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockService } from './shared/mock.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    UsersModule,
    CommonsModule,
    AuthModule,
    HttpClientInMemoryWebApiModule.forRoot(MockService, { delay: 200 }),
    AdminsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
