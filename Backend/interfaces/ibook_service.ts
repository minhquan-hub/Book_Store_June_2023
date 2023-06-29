import {
  BookCreateDto,
  BookCriteriaDto,
  BookDto,
  BookUpdateDto,
  PagedResponseModel,
} from "dtos";
import { Book, IBook } from "models";

export interface IBookService {
  getBookList(
    bookCriteriaDto: BookCriteriaDto
  ): Promise<PagedResponseModel<IBook>>;
  getBookById(id: string): Promise<BookDto>;
  addBook(bookCreateDto: BookCreateDto): Promise<IBook | null>;
  updateBook(id: string, bookUpdateDto: BookUpdateDto): Promise<IBook>;
  deleteBook(id: string): Promise<IBook>;
}
