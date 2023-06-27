import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselImageComponent } from './carousel-image/carousel-image.component';
import { HomeComponent } from './home/home.component';
import { GetAllBookComponent } from '../users/get-all-book/get-all-book.component';
import { UsersModule } from '../users/users.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    CarouselImageComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    UsersModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CommonsModule { }
