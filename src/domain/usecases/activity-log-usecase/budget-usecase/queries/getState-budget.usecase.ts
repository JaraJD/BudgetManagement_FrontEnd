import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { BudgetModel } from "src/domain/models/activity-log-model/budget-model/queries/budget.model";
import { BudgetRepository } from "src/domain/repositories/activity-log-repositories/budget.repository";

export class GetBudgetByStateUseCase implements UseCase<{user:string, state:string}, BudgetModel[]>{

    constructor(private repository: BudgetRepository){}

    execute(params : {user : string, state : string}): Observable<BudgetModel[]> {
        return this.repository.GetBudgetByStateAsync(params);
    }

}