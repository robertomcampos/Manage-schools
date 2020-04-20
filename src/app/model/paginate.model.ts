export interface IPaging<T>  {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    totalCount: number;
    items: Array<T>;
}

export interface IPagingParams  {
    page: number;
    limit: number;
}