import { BudgetModel } from "../../budget-model/queries/budget.model";
import { CategoryModel } from "../../category.model";

export interface TransactionModel {
    id: number,
    date: Date,
    type: string,
    amount: number,
    description: string,
    categoryId: number,
    budgetId: number,
    category: CategoryModel,
    budget: BudgetModel

}