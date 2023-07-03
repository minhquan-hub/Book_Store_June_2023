import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetAllBookComponent } from './get-all-book/get-all-book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';



@NgModule({
  declarations: [
    GetAllBookComponent,
    BookDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GetAllBookComponent,
    BookDetailComponent
  ]
})
export class UsersModule { }
