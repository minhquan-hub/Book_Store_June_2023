import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../../shared/services/book.service';
import { Book } from '../../../models/book.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((res: any) => {
      this.books = res;
    });
  }

  onUpdate(id: any) {
    this.router.navigate([`/admin/update/${id}`])
  }

  onDelete(id: any) {
    this.bookService.deleteBook(id).subscribe((res: any) => {
      alert("Delete Successful");
      this.bookService.getAllBooks().subscribe((res: any) => {
        this.books = res[0].data;
      });
    });
  }

}
