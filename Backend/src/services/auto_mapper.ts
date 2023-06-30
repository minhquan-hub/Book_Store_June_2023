import { injectable } from "inversify";
import { PojosMetadataMap } from "@automapper/pojos";
import mongoose from "mongoose";
import { IBook, IUser } from "src/models";
import { BookDto, UserCreateDto } from "../dtos";

class AutoMapperService {
  mapperUserAndUserCreateDto() {
    PojosMetadataMap.create<IUser>("IUser", {
      email: String,
      password: String,
      role: String,
      phone: String,
    });

    PojosMetadataMap.create<UserCreateDto>("UserCreateDto", {
      email: String,
      password: String,
      role: String,
      phone: String,
    });
  }

  mapperBookAndBookDto() {
    PojosMetadataMap.create<IBook>("IBook", {
      title: String,
      author: String,
      category: String,
      description: String,
      price: Number,
      quantity: Number,
      image: String,
    });

    PojosMetadataMap.create<BookDto>("BookDto", {
      title: String,
      author: String,
      category: String,
      description: String,
      price: Number,
      quantity: Number,
      image: String,
    });
  }
}

export default new AutoMapperService();
