import { CategorySynonym } from "./CategorySynonym";

export class CategoryAndSynonymRes {

    CategoryId: number;
    IdForZbizlink: number;
    Name: string;

    CategorySynonym: Array<CategorySynonym>;

}