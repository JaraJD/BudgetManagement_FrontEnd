import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { BudgetExpenseRepository } from "src/domain/repositories/activity-log-repositories/budget-expense.repository";

export class DeleteBudgetExpenseUseCase implements UseCase<number, string>{

    constructor(private repository: BudgetExpenseRepository){}

    execute(id: number): Observable<string> {
        return this.repository.DeleteBudgetExpenseAsync(id);
    }

}