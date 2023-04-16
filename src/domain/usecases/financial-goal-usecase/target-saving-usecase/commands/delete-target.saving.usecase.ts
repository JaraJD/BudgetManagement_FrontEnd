import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { DeleteTargetSavingModel } from "src/domain/models/financial-goal-model/target-saving-model/commands/delete-target-saving.model";
import { TargetSavingRepository } from "src/domain/repositories/financial-goal-repositories/target-saving.repository";

export class DeleteTargetSavingUseCase implements UseCase<number, number>{

    constructor(private repository: TargetSavingRepository){}

    execute(id: number): Observable<number> {
        return this.repository.DeleteTargetSavingAsync(id);
    }

}