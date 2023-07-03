import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../../shared/services/book.service';
import { Book } from '../../../models/book.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  books: Book[] = [];
  pageSize = 8;
  currentPage = 1;
  totalPages = 1;
  totalItems = 0;
  maxPagesToShow = 5;

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.bookService
      .getAllBooks(this.currentPage, this.pageSize)
      .subscribe((res: any) => {
        this.books = res.items;
        this.totalItems = res.totalItems;
        this.totalPages = res.totalPages;
      });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadData();
  }

  getPaginationArray(): number[] {
    const startPage = Math.max(
      1,
      this.currentPage - Math.floor(this.maxPagesToShow / 2)
    );

    const endPage = Math.min(
      startPage + this.maxPagesToShow - 1,
      this.totalPages
    );

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  }

  onUpdate(id: any) {
    this.router.navigate([`/admin/update/${id}`]);
  }

  onDelete(id: string | undefined) {
    this.bookService.deleteBook(id).subscribe((res: any) => {
      alert('Delete Successful');
      this.bookService.getAllBooks(0, 0).subscribe((res: any) => {
        this.books = res[0].data;
      });
    });
  }
}
