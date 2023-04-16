import { BudgetExpenseModel } from '../../budget-expense-model/queries/budget-expense.model';
export interface BudgetModel {
    id : number,
    name: string,
    targetMonth: Date,
    balance: number,
    monthlyTotal: number,
    state: string,
    budgetExpense: BudgetExpenseModel,

}