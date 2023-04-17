import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { BudgetModel } from "src/domain/models/activity-log-model/budget-model/queries/budget.model";
import { BudgetRepository } from "src/domain/repositories/activity-log-repositories/budget.repository";

export class GetBudgetByUserUseCase implements UseCase<string | null, BudgetModel[]>{

    constructor(private repository: BudgetRepository){}

    execute(user : string | null): Observable<BudgetModel[]> {
        return this.repository.GetBudgetByIdAsync(user);
    }

}