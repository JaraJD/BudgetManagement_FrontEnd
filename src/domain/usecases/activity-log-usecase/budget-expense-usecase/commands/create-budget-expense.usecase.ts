import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { CreateBudgetExpenseModel } from "src/domain/models/activity-log-model/budget-expense-model/commands/create-budget-expense.model";
import { BudgetExpenseRepository } from "src/domain/repositories/activity-log-repositories/budget-expense.repository";

export class CreateBudgetExpenseUseCase implements UseCase<CreateBudgetExpenseModel, string>{

    constructor(private repository: BudgetExpenseRepository){}

    execute(budget: CreateBudgetExpenseModel): Observable<string> {
        return this.repository.CreateBudgetExpenseAsync(budget);
    }

}