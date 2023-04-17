import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { TargetSavingModel } from "src/domain/models/financial-goal-model/target-saving-model/queries/target-saving.model";
import { TargetSavingRepository } from "src/domain/repositories/financial-goal-repositories/target-saving.repository";

export class GetTargetSavingByStateUseCase implements UseCase<{user:string, state:string}, TargetSavingModel[]>{

    constructor(private repository: TargetSavingRepository){}

    execute(params : {user : string, state : string}): Observable<TargetSavingModel[]> {
        return this.repository.GetTargetSavingByStateAsync(params);
    }

}