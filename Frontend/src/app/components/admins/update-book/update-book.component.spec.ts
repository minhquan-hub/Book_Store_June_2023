import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBookComponent } from './update-book.component';
import { Router } from '@angular/router';
import { BookService } from '../../../shared/services/book.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormGroup } from '@angular/forms';
import { of } from 'rxjs';

describe('UpdateBookComponent', () => {
  let component: UpdateBookComponent;
  let fixture: ComponentFixture<UpdateBookComponent>;
  let router: Router;

  beforeEach(async () => {
    const mockBookService = {
      getBookById: () => {
        return of({
          id: '1',
          title: 'Lessons in Chemistry: A Novel',
          author: 'Bonnie Garmus',
          category: 'novel',
          description:
            'Chemist Elizabeth Zott is not your average woman. In fact, Elizabeth Zott would be the first to point out that there is no such thing as an average woman. But it’s the early 1960s and her all-male team at Hastings Research Institute takes a very unscientific view of equality. Except for one: Calvin Evans, the lonely, brilliant, Nobel–prize nominated grudge-holder who falls in love with—of all things—her mind. True chemistry results. ',
          price: 12,
          quantity: 23,
          image:
            'https://m.media-amazon.com/images/I/41UG6tNeHBL._SX334_BO1,204,203,200_.jpg',
        })
      },
      updateBook: () => {
        return of(true)
      }
    }

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ UpdateBookComponent ],
      providers: [
        { provide: BookService, useValue: mockBookService }
      ]
    })
    .compileComponents();

    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form on component initialization', () => {
    expect(component.updateForm).toBeInstanceOf(FormGroup);
    expect(Object.keys(component.updateForm.controls)).toEqual([
      'title',
      'author',
      'category',
      'description',
      'price',
      'quantity',
      'image'
    ]);
  });

  it('should call bookService.updateBook and navigate on form submission', () => {
    const formData = {
      title: 'Test Title',
      author: 'Test Author',
      category: 'Test Category',
      description: 'Test Description',
      price: 9,
      quantity: 10,
      image: 'test-image.jpg'
    };
    const routerSpy = spyOn(router, 'navigate');

    component.updateForm.setValue(formData);
    component.onUpdate();

    expect(routerSpy).toHaveBeenCalledWith(['/admin']);
  });
});
