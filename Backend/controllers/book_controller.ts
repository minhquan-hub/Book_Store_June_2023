import { Request, Response} from 'express';
import { StatusCodes } from 'http-status-codes';
import { inject } from 'inversify';
import { interfaces, controller, httpGet, httpPost, request, response, requestParam, httpPut, httpDelete } from "inversify-express-utils";
import { BookCreateDto } from '../dtos/book/book_create_dto';
import { BookCriteriaDto } from '../dtos/book/book_criteria_dto';
import { BookUpdateDto } from '../dtos/book/book_update_dto';
import { PagedResponseModel } from '../dtos/pagedResponseModel';

import { IBookService } from '../interfaces/ibook_service';
import { IBook } from '../models/Book';
import TYPES from '../type';
import MiddlewareValidate from '../middlewares/middlewareValidate'
import { BookDto } from '../dtos/book/book_dto';

@controller("/book")
class BookController implements interfaces.Controller {
    private _bookService: IBookService;

    constructor(@inject(TYPES.IBookService) bookService: IBookService) {
        this._bookService = bookService;
    }

    @httpGet("")
    async getBooks(req: Request, res: Response) {
        try {
            const bookCriteriaDto : BookCriteriaDto = {
                search: req.query.search as string || "",
                sortOrder: parseInt(req.query.sortOrder as string) || 1,
                sortColumn: req.query.sortColumn as string || "title",
                limit: parseInt(req.query.limit as string) || 5,
                page: parseInt(req.query.page as string) || 1
            }
            
            const books: PagedResponseModel<IBook> = await this._bookService.getBookList(bookCriteriaDto)
            return res.status(StatusCodes.OK).json(books)
        } catch (err) {
            throw err
        }
    }

    @httpGet("/:id")
    async getBookById(req: Request, res: Response) {
        try {
            const id: string = req.params.id
            const book: BookDto = await this._bookService.getBookById(id)
            return res.status(StatusCodes.OK).json(book)
        } catch (err) {
            throw err
        }
    }


    @httpPost("", MiddlewareValidate.verifyTokenAndIsAdmin)
    async postBook(req: Request, res: Response) {
        try {
            const bookCreateDto: BookCreateDto = {
                title: req.body.title,
                author: req.body.author,
                category: req.body.category,
                description: req.body.description,
                price: parseInt(req.body.price),
                quantity: parseInt(req.body.quantity),
                image: req.body.image
            }

            const book: IBook = await this._bookService.addBook(bookCreateDto)

            return res.status(StatusCodes.OK).json(book)
        } catch (err) {
            throw err
        }
    }

    @httpPut("/:id", MiddlewareValidate.verifyTokenAndIsAdmin)
    async putBook(req: Request, res: Response) {
        try {
            const id: string = req.params.id
            const bookUpdateDto: BookUpdateDto = {
                title: req.body.title,
                author: req.body.author,
                category: req.body.category,
                description: req.body.description,
                price: parseInt(req.body.price),
                quantity: parseInt(req.body.quantity),
                image: req.body.image 
            }
            
            const book: IBook = await this._bookService.updateBook(id, bookUpdateDto)

            return res.status(StatusCodes.OK).json(book)
        } catch (err) {
            throw err
        }
    }

    @httpDelete("/:id", MiddlewareValidate.verifyTokenAndIsAdmin)
    async deleteBook(req: Request, res: Response) {
        try {
            const id : string = req.params.id
            const book: IBook = await this._bookService.deleteBook(id)
            return res.status(StatusCodes.OK).json(book)
        } catch (err) {
            throw err
        }
    }

}

export default BookController