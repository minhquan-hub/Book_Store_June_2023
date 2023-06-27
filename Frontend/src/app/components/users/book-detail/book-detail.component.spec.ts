import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BookDetailComponent } from './book-detail.component'
import { Router } from '@angular/router'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BookService } from '../../../shared/services/book.service'
import { of } from 'rxjs'
import { Book } from '../../../models/book.model';

describe('BookDetailComponent', () => {
  let component: BookDetailComponent
  let fixture: ComponentFixture<BookDetailComponent>
  let router: Router

  beforeEach(async () => {
    const mockBookService = {
      getBookById: () => {
        return of({
          id: '1',
          title: 'Book Title',
          author: 'Author Name',
          category: 'Category',
          description: 'Book Description',
          price: 9.99,
          quantity: 10,
          image: 'book-image.jpg'
        })
      },
    }

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [BookDetailComponent],
      providers: [{ provide: BookService, useValue: mockBookService }],
    }).compileComponents()

    router = TestBed.inject(Router)
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should fetch the book details based on the route parameter', () => {
    const bookId = '1';
    const bookData: Book = {
      id: bookId,
      title: 'Book Title',
      author: 'Author Name',
      category: 'Category',
      description: 'Book Description',
      price: 9.99,
      quantity: 10,
      image: 'book-image.jpg'
    };

    fixture.detectChanges();

    expect(component.book).toEqual(bookData);
  });
})
