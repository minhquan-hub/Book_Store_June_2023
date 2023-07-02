import { Book } from '../../../models/book.model'
import { Component, OnInit } from '@angular/core'
import { BookService } from '../../../shared/services/book.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-get-all-book',
  templateUrl: './get-all-book.component.html',
  styleUrls: ['./get-all-book.component.css'],
})
export class GetAllBookComponent implements OnInit {
  books: Book[] = []
  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((res: any) => {
      this.books = res.items
    })
  }

  onShowDetail(id: any) {
    this.router.navigate([`/book-detail/${id}`])
  }
}
