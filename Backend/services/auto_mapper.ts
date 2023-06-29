import { injectable } from "inversify";
import { PojosMetadataMap } from "@automapper/pojos"
import mongoose from 'mongoose'

import { IUser } from '../models/User'
import { IAutoMapperService } from '../interfaces/iauto_mapper_service'
import { UserCreateDto } from "../dtos/user/user_create_dto";
import { IBook } from "../models/Book";
import { BookDto } from "../dtos/book/book_dto";


class AutoMapperService {
    mapperUserAndUserCreateDto() {
        PojosMetadataMap.create<IUser>('IUser', {
            email: String,
            password: String,
            role: String,
            phone: String,
        })

        PojosMetadataMap.create<UserCreateDto>('UserCreateDto', {
            email: String,
            password: String,
            role: String,
            phone: String,
        })
    }

    mapperBookAndBookDto() {
        PojosMetadataMap.create<IBook>('IBook', {
            title: String,
            author: String,
            category: String,
            description: String,
            price: Number,
            quantity: Number,
            image: String
        })

        PojosMetadataMap.create<BookDto>('BookDto', {
            title: String,
            author: String,
            category: String,
            description: String,
            price: Number,
            quantity: Number,
            image: String
        })        
    }
    
}

export default new AutoMapperService()