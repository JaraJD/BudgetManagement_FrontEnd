import { BudgetExpenseModel } from '../../budget-expense-model/queries/budget-expense.model';
export interface BudgetModel {
    name: string,
    targetMonth: Date,
    balance: number,
    monthlyTotal: number,
    state: string,
    budgetExpense: BudgetExpenseModel,

}