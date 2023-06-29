import { injectable } from "inversify";

import Http400Error from "../error_handling/errors/http_400_error";
import APIError from "../error_handling/errors/api_error";
import { mapper } from "../auto_mapper/auto_mapper_profile";
import {
  BookCreateDto,
  BookCriteriaDto,
  BookDto,
  BookUpdateDto,
  PagedResponseModel,
} from "dtos";
import { IBookService } from "interfaces";
import { IBook, Book } from "../models";

@injectable()
class BookService implements IBookService {
  constructor() {}

  /**
   *
   * @param bookCriteriaDto
   * @returns
   *
   * 0. get input
   * 1. dpodh
   * 2/ query
   * 3. format final result
   * 4. sned condition
   */
  async getBookList(
    bookCriteriaDto: BookCriteriaDto
  ): Promise<PagedResponseModel<IBook>> {
    const searchQuery = bookCriteriaDto.search;
    const search: any = searchQuery
      ? { author: { $regex: searchQuery, $options: "msxi" } }
      : {};
    const sortColumn = bookCriteriaDto.sortColumn || "title";
    const sortOrder = bookCriteriaDto.sortOrder * 1 || 1;
    const limit = bookCriteriaDto.limit || 5;
    const skip = (bookCriteriaDto.page - 1) * limit;
    const sort: any = {
      [sortColumn]: sortOrder,
    };

    // build query - stage
    let queryConditions = {};

    //add condition delete
    search["isDelete"] = false;

    // final query condition
    queryConditions = {
      ...search,
    };

    // execution - find stage
    const books: IBook[] = await Book.find(queryConditions)
      .skip(skip)
      .limit(limit)
      .sort(sort)
      .lean();

    const totalItem = await Book.countDocuments(queryConditions);
    const totalPaged = Math.ceil(totalItem / limit);
    const currentPage = bookCriteriaDto.page < 0 ? 1 : bookCriteriaDto.page;

    const pagedResponseBook: PagedResponseModel<IBook> = {
      currentPage: currentPage,
      totalItems: totalItem,
      totalPages: totalPaged,
      items: books,
      search: search,
      sortOrder: sortOrder,
      sortColumn: sortColumn,
      limit: limit,
      page: bookCriteriaDto.page,
    };

    return pagedResponseBook;
  }

  async getBookById(id: string): Promise<BookDto> {
    try {
      console.log("id" + id);
      const bookDto1 = Book.findById(id).then((book: IBook) => {
        const bookDto: BookDto = mapper.map<IBook, BookDto>(
          book,
          "BookDto",
          "IBook"
        );
        console.log(bookDto);
        return bookDto;
      });

      if (bookDto1 === null) {
        throw new Http400Error("The Book is not found");
      }

      return bookDto1;
    } catch (err) {
      console.error(err);
      throw new APIError("Something wrong server");
    }
  }

  async addBook(bookCreateDto: BookCreateDto) {
    try {
      const newBook = new Book({
        title: bookCreateDto.title,
        author: bookCreateDto.author,
        category: bookCreateDto.category,
        description: bookCreateDto.description,
        price: bookCreateDto.price,
        quantity: bookCreateDto.quantity,
        image: bookCreateDto.image,
        isDelete: false,
      });

      const book = await newBook.save();

      if (book != null) {
        return book;
      }

      return null;
    } catch (err) {
      console.log(err);
      throw new APIError(err.message);
    }
  }

  async updateBook(id: string, bookUpdateDto: BookUpdateDto): Promise<IBook> {
    try {
      const option = { new: true };
      const book = await Book.findByIdAndUpdate(id, bookUpdateDto, option);

      if (book != null) {
        return book;
      }

      return null;
    } catch (err) {
      console.log(err);
      throw new APIError("Something wrong server");
    }
  }

  async deleteBook(id: string): Promise<IBook> {
    try {
      const option = { new: true };
      console.log(id);
      const book = await Book.findByIdAndUpdate(
        id,
        { $set: { isDelete: true } },
        option
      );

      if (book != null) {
        return book;
      }

      return null;
    } catch (err) {
      console.log(err);
      throw new APIError("Something wrong server");
    }
  }
}

export default BookService;
