import { BaseQueryCriteria } from "./base_query_criteria";

export interface PagedResponseModel<TModel> extends BaseQueryCriteria {
    currentPage: number;
    totalItems: number;
    totalPages: number;
    items: TModel[];
}