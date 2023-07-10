import { Book } from '../../../models/book.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../../shared/services/book.service';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css'],
})
export class UpdateBookComponent implements OnInit {
  updateForm!: FormGroup;
  book!: Book;
  id!: string;

  constructor(
    private bookService: BookService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRouter.params
      .pipe(
        concatMap((params) => {
          this.id = params['id'];
          return this.bookService.getBookById(this.id);
        })
      )
      .subscribe((res) => {
        console.log(res);
        this.book = res;

        this.updateForm = new FormGroup({
          title: new FormControl(this.book.title),
          author: new FormControl(this.book.author),
          category: new FormControl(this.book.category),
          description: new FormControl(this.book.description),
          price: new FormControl(this.book.price),
          quantity: new FormControl(this.book.quantity),
          image: new FormControl(this.book.image),
        });
      });
  }

  onUpdate() {
    const formData = this.updateForm.value;
    console.log(formData);
    this.bookService.updateBook(this.id, formData).subscribe((res) => {
      alert('Update Successful');
      console.log(res);
    });

    this.router.navigate(['/admin']);
  }
}
