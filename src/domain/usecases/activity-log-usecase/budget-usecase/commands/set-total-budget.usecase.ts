import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { SetTotalBudgetModel } from "src/domain/models/activity-log-model/budget-model/commands/set-total-budget.model";
import { BudgetRepository } from "src/domain/repositories/activity-log-repositories/budget.repository";

export class SetTotalBudgetUseCase implements UseCase<SetTotalBudgetModel, string>{

    constructor(private repository: BudgetRepository){}

    execute(budget: SetTotalBudgetModel): Observable<string> {
        return this.repository.SetTotalMonthlyAsync(budget);
    }

}