import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { UpdateBudgetModel } from "src/domain/models/activity-log-model/budget-model/commands/update-budget.model";
import { BudgetRepository } from "src/domain/repositories/activity-log-repositories/budget.repository";

export class UdpateBudgetUseCase implements UseCase<UpdateBudgetModel, string>{

    constructor(private repository: BudgetRepository){}

    execute(budget: UpdateBudgetModel): Observable<string> {
        return this.repository.UpdateBudgetAsync(budget);
    }

}