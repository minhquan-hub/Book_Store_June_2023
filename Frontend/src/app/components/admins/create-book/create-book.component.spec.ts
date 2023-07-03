import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookComponent } from './create-book.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BookService } from '../../../shared/services/book.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('CreateBookComponent', () => {
  let component: CreateBookComponent;
  let fixture: ComponentFixture<CreateBookComponent>;
  let router: Router;

  beforeEach(async () => {
    const mockBookService = {
      createBook: () => {
        return of(true)
      },

    }

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule],
      declarations: [ CreateBookComponent ],
      providers: [
        {provide: BookService, useValue: mockBookService}
      ]
    })
    .compileComponents();

    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form on component initialization', () => {
    expect(component.createForm).toBeInstanceOf(FormGroup);
    expect(Object.keys(component.createForm.controls)).toEqual([
      'title',
      'author',
      'category',
      'description',
      'price',
      'quantity',
      'image'
    ]);
  });

  it('should call bookService.createBook and navigate on form submission', () => {
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

    component.createForm.setValue(formData);
    component.onCreate();

    expect(routerSpy).toHaveBeenCalledWith(['/admin']);
  });

});
