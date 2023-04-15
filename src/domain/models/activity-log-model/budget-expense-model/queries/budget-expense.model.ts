import { CategoryModel } from "../../category.model";

export interface BudgetExpenseModel {
    amount: number,
    description: string,
    category: CategoryModel
}