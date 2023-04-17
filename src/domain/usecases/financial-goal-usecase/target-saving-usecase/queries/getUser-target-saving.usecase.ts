import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { TargetSavingModel } from "src/domain/models/financial-goal-model/target-saving-model/queries/target-saving.model";
import { TargetSavingRepository } from "src/domain/repositories/financial-goal-repositories/target-saving.repository";

export class GetTargetSavingByUserUseCase implements UseCase<string | null, TargetSavingModel[]>{

    constructor(private repository: TargetSavingRepository){}

    execute(user : string | null): Observable<TargetSavingModel[]> {
        return this.repository.GetTargetSavingByIdAsync(user);
    }

}