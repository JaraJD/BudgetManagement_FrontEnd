import { Observable } from "rxjs";
import { CreateBudgetExpenseModel } from "src/domain/models/activity-log-model/budget-expense-model/commands/create-budget-expense.model";
import { UpdateBudgetExpenseModel } from "src/domain/models/activity-log-model/budget-expense-model/commands/update-budget-expense.model";
import { BudgetExpenseModel } from "src/domain/models/activity-log-model/budget-expense-model/queries/budget-expense.model";

export abstract class BudgetExpenseRepository {
    abstract CreateBudgetExpenseAsync( budget : CreateBudgetExpenseModel) : Observable<string>
    abstract UpdateBudgetExpenseAsync( budget : UpdateBudgetExpenseModel) : Observable<string>
    abstract DeleteBudgetExpenseAsync( id : number) : Observable<string>
    abstract GetBudgetExpenseByIdAsync( id : number | null) : Observable<BudgetExpenseModel[]>
}