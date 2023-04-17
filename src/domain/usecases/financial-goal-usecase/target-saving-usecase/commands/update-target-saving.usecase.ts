import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { UpdateTargetSavingModel } from "src/domain/models/financial-goal-model/target-saving-model/commands/update-target-saving.model";
import { TargetSavingRepository } from "src/domain/repositories/financial-goal-repositories/target-saving.repository";

export class UpdateTargetSavingUseCase implements UseCase<UpdateTargetSavingModel, number>{

    constructor(private repository: TargetSavingRepository){}

    execute(saving: UpdateTargetSavingModel): Observable<number> {
        return this.repository.UpdateTargetSavingAsync(saving);
    }

}