import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { BudgetExpenseModel } from "src/domain/models/activity-log-model/budget-expense-model/queries/budget-expense.model";
import { BudgetExpenseRepository } from "src/domain/repositories/activity-log-repositories/budget-expense.repository";

export class GetBudgetExpenseByIdUseCase implements UseCase<number | null, BudgetExpenseModel[]>{

    constructor(private repository: BudgetExpenseRepository){}

    execute(user : number | null): Observable<BudgetExpenseModel[]> {
        return this.repository.GetBudgetExpenseByIdAsync(user);
    }

}