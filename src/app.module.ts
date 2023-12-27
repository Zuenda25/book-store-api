import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorsModule } from './modules/authors/authors.module';
import { BooksModule } from './modules/books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './configs/env.config';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
    }),
    AuthorsModule,
    BooksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config().database.host,
      port: config().database.port,
      username: config().database.username,
      password: config().database.password,
      database: config().database.database,
      entities: [__dirname + '/**/**/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
