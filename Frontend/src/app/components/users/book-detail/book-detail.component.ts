import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../../shared/services/book.service';
import { Book } from '../../../models/book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book!: Book;
  id!: string;
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.router.url.split('/')[2];
    console.log(this.id);
    this.bookService.getBookById(this.id).subscribe((res) => {
      this.book = res;
      console.log(this.book);
    })
  }

}
