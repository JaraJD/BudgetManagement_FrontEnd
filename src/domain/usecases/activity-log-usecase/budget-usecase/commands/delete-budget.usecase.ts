import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { BudgetRepository } from "src/domain/repositories/activity-log-repositories/budget.repository";

export class DeleteBudgetUseCase implements UseCase<number, string>{

    constructor(private repository: BudgetRepository){}

    execute(id: number): Observable<string> {
        return this.repository.DeleteBudgetAsync(id);
    }

}