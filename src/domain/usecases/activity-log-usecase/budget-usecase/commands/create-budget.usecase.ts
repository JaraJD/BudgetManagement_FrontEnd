import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { CreateBudgetModel } from "src/domain/models/activity-log-model/budget-model/commands/create-budget.model";
import { BudgetRepository } from "src/domain/repositories/activity-log-repositories/budget.repository";

export class CreateBudgetUseCase implements UseCase<CreateBudgetModel, string>{

    constructor(private repository: BudgetRepository){}

    execute(budget: CreateBudgetModel): Observable<string> {
        return this.repository.CreateBudgetAsync(budget);
    }

}