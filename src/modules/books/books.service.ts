import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
// import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private readonly bookRepository: Repository<Book>,
  ) {}

  create(book: CreateBookDto) {
    return this.bookRepository.save(book);
  }

  findAll() {
    return `This action returns all books`;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
