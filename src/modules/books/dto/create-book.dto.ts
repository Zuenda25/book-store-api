export class CreateBookDto {
  book_id: string;
  title: string;
  description: string;
  author_id: string;
  published_year: number;
  is_deleted: boolean;
  created_at: Date;
  created_from: string;
  created_by: string;
  created_name: string;
  updated_at: Date;
  updated_from: string;
  updated_by: string;
  updated_name: string;
}
