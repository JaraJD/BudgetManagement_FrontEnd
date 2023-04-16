import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { UpdateBudgetExpenseModel } from "src/domain/models/activity-log-model/budget-expense-model/commands/update-budget-expense.model";
import { BudgetExpenseRepository } from "src/domain/repositories/activity-log-repositories/budget-expense.repository";

export class UdpateBudgetExpenseUseCase implements UseCase<UpdateBudgetExpenseModel, string>{

    constructor(private repository: BudgetExpenseRepository){}

    execute(budget: UpdateBudgetExpenseModel): Observable<string> {
        return this.repository.UpdateBudgetExpenseAsync(budget);
    }

}