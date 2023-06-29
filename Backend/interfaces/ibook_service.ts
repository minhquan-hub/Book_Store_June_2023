import { BookCreateDto } from "../dtos/book/book_create_dto";
import { BookCriteriaDto } from "../dtos/book/book_criteria_dto";
import { BookDto } from "../dtos/book/book_dto";
import { BookUpdateDto } from "../dtos/book/book_update_dto";
import { PagedResponseModel } from "../dtos/pagedResponseModel";
import Book, { IBook } from "../models/Book";

export interface IBookService {
    getBookList(bookCriteriaDto: BookCriteriaDto): Promise<PagedResponseModel<IBook>>
    getBookById(id: string) : Promise<BookDto>
    addBook(bookCreateDto:  BookCreateDto) : Promise<IBook | null>
    updateBook(id: string, bookUpdateDto: BookUpdateDto) : Promise<IBook>
    deleteBook(id: string) : Promise<IBook>
}