import { Request, Response } from "express";
import { inject, injectable } from "inversify";

import {
  BookCreateDto,
  BookCriteriaDto,
  BookDto,
  BookUpdateDto,
  PagedResponseModel,
} from "dtos";
import { IBookService } from "interfaces";
import TYPES from "../type";
import { IBook } from "models";

@injectable()
export class BookController {
  private _bookService: IBookService;

  constructor(@inject(TYPES.IBookService) bookService: IBookService) {
    this._bookService = bookService;
  }

  async getBooks(req: Request, res: Response) {
    try {
      const bookCriteriaDto: BookCriteriaDto = {
        search: (req.query.search as string) || "",
        sortOrder: parseInt(req.query.sortOrder as string) || 1,
        sortColumn: (req.query.sortColumn as string) || "title",
        limit: parseInt(req.query.limit as string) || 5,
        page: parseInt(req.query.page as string) || 1,
      };

      const books: PagedResponseModel<IBook> =
        await this._bookService.getBookList(bookCriteriaDto);
      return res.status(200).json(books);
    } catch (err) {
      throw err;
    }
  }

  async getBookById(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const book: BookDto = await this._bookService.getBookById(id);
      return res.status(200).json(book);
    } catch (err) {
      throw err;
    }
  }

  async postBook(req: Request, res: Response) {
    try {
      const bookCreateDto: BookCreateDto = {
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        description: req.body.description,
        price: parseInt(req.body.price),
        quantity: parseInt(req.body.quantity),
        image: req.body.image,
      };

      const book: IBook = await this._bookService.addBook(bookCreateDto);

      return res.status(200).json(book);
    } catch (err) {
      throw err;
    }
  }

  async putBook(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const bookUpdateDto: BookUpdateDto = {
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        description: req.body.description,
        price: parseInt(req.body.price),
        quantity: parseInt(req.body.quantity),
        image: req.body.image,
      };

      const book: IBook = await this._bookService.updateBook(id, bookUpdateDto);

      return res.status(200).json(book);
    } catch (err) {
      throw err;
    }
  }

  async deleteBook(req: Request, res: Response) {
    try {
      const id: string = req.params.bookId;
      const book: IBook = await this._bookService.deleteBook(id);
      return res.status(200).json(book);
    } catch (err) {
      throw err;
    }
  }
}
