import { CategoryModel } from "../../category.model";

export interface BudgetExpenseModel {
    id : number,
    amount: number,
    description: string,
    category: CategoryModel
}