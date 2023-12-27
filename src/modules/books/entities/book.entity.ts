import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Book {
  @PrimaryGeneratedColumn('uuid')
  book_id: string;

  @Column({
    type: 'varchar',
    length: 500,
    nullable: false,
  })
  title: string;

  @Column({
    type: 'uuid',
    nullable: false,
  })
  author_id: string;

  @Column({
    type: 'varchar',
    length: 500,
    nullable: true,
  })
  description: string;

  @Column({
    type: 'year',
    nullable: false,
  })
  published_year: number;

  @Column({
    type: 'boolean',
    nullable: false,
    default: false,
  })
  is_deleted: boolean;

  @Column({
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_date: Date;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  created_from: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  created_by: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  created_name: string;

  @Column({
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  modified_date: Date;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  modified_from: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  modified_by: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  modified_name: string;
}
