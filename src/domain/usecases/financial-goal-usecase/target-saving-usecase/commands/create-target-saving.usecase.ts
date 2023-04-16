import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { CreateTargetSavingModel } from "src/domain/models/financial-goal-model/target-saving-model/commands/create-target-saving.model";
import { TargetSavingRepository } from "src/domain/repositories/financial-goal-repositories/target-saving.repository";

export class CreateTargetSavingUseCase implements UseCase<CreateTargetSavingModel, number>{

    constructor(private repository: TargetSavingRepository){}

    execute(saving: CreateTargetSavingModel): Observable<number> {
        return this.repository.CreateTargetSavingAsync(saving);
    }

}