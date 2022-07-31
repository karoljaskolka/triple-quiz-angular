export interface PaginationDto<T> {
  results: T[];
  page: number;
  perPage: number;
  totalItems: number;
}
