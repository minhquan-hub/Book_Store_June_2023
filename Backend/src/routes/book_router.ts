import express from "express";

import { container } from "../container";
import { BookController } from "../controllers";
import MiddlewareValidate from "../middlewares/middleware_validate";
export const bookRouter = express.Router();

const bookController = container.resolve<BookController>(BookController);

bookRouter.get("/", bookController.getBooks.bind(bookController));
bookRouter.get("/:bookId", bookController.getBookById.bind(bookController));
bookRouter.post("/", bookController.postBook.bind(bookController));
bookRouter.put("/:bookId", bookController.putBook.bind(bookController));
bookRouter.delete("/:bookId", bookController.deleteBook.bind(bookController));
