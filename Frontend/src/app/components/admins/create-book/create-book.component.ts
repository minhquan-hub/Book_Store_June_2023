import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../../../shared/services/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  createForm!: FormGroup;
  submitted = false;
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.createForm = new FormGroup({
      'title': new FormControl(),
      'author': new FormControl(),
      'category': new FormControl(),
      'description': new FormControl(),
      'price': new FormControl(),
      'quantity': new FormControl(),
      'image': new FormControl()
    })
  }

  onCreate() {
    const formData = this.createForm.value;
    console.log(formData)
    this.submitted = true;
    if(this.submitted) {
      this.bookService.createBook(formData).subscribe((res: any) => {
        alert("Create Successful");
       console.log(res);
      })
    }

    this.router.navigate(['/admin'])
  }

}
