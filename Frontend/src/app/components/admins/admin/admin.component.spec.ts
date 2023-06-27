import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AdminComponent } from './admin.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BookService } from '../../../shared/services/book.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let router: Router;

  const bookMockData = [
    {
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
    },
    {
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
    },

    {
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
    }]

  beforeEach(async () => {
    const mockBookService = {
      getAllBooks: () => {
        return of(bookMockData)
      },
      deleteBook: () => {
        return of(true)
      }
    }

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ AdminComponent ],
      providers: [
        { provide: BookService, useValue: mockBookService }
      ]
    })
    .compileComponents();

    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to update page with correct id', () => {
    const id = 123;
    const routerSpy = spyOn(router, 'navigate');

    component.onUpdate(id);

    expect(routerSpy).toHaveBeenCalledWith([`/admin/update/${id}`]);
  });

  it('should delete book and fetch all books again on delete', () => {
    const id = '123';
    const alertSpy = spyOn(window, 'alert');

    component.onDelete(id);

    expect(alertSpy).toHaveBeenCalledWith('Delete Successful');
  });
});
