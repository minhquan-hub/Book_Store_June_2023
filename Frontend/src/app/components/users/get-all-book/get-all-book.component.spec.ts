import { ComponentFixture, TestBed } from '@angular/core/testing'

import { GetAllBookComponent } from './get-all-book.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BookService } from '../../../shared/services/book.service'
import { of } from 'rxjs'
import { Router } from '@angular/router'
import { Book } from '../../../models/book.model';

describe('GetAllBookComponent', () => {
  let component: GetAllBookComponent
  let fixture: ComponentFixture<GetAllBookComponent>
  let router: Router

  beforeEach(async () => {
    const mockBookService = {
      getAllBooks: () => {
        return of([
          {
            id: '1',
            title: 'Book Title',
            author: 'Author Name',
            category: 'Category',
            description: 'Book Description',
            price: 9,
            quantity: 10,
            image: 'book-image.jpg',
          },
          {
            id: '2',
            title: 'Book Title',
            author: 'Author Name',
            category: 'Category',
            description: 'Book Description',
            price: 9,
            quantity: 10,
            image: 'book-image.jpg',
          },
        ])
      },
    }

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [GetAllBookComponent],
      providers: [{ provide: BookService, useValue: mockBookService }],
    }).compileComponents()

    router = TestBed.inject(Router)
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllBookComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should fetch all books on component initialization', () => {
    const bookData: Book[] = [
      {
        id: '1',
        title: 'Book Title',
        author: 'Author Name',
        category: 'Category',
        description: 'Book Description',
        price: 9,
        quantity: 10,
        image: 'book-image.jpg',
      },
      {
        id: '2',
        title: 'Book Title',
        author: 'Author Name',
        category: 'Category',
        description: 'Book Description',
        price: 9,
        quantity: 10,
        image: 'book-image.jpg',
      },
    ]

    fixture.detectChanges()

    expect(component.books).toEqual(bookData)
  })

  it('should navigate to book detail page when show detail button is clicked', () => {
    const bookId = '123'
    const routerSpy = spyOn(router, 'navigate')

    component.onShowDetail(bookId)

    expect(routerSpy).toHaveBeenCalled()
  })
})
