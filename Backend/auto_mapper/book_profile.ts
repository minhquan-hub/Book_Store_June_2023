import { createMap, createMapper, MappingProfile } from "@automapper/core";
import { BookDto } from "../dtos/book/book_dto";
import { IBook } from "models";

export const BookProfile: MappingProfile = (mapper) => {
  createMap<IBook, BookDto>(mapper, "BookDto", "IBook");
};
