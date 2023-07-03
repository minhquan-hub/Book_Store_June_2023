import { createMap, createMapper, MappingProfile } from "@automapper/core";
import { BookDto } from "../dtos";
import { IBook } from "src/models";

export const BookProfile: MappingProfile = (mapper) => {
  createMap<IBook, BookDto>(mapper, "BookDto", "IBook");
};
