import { Observable } from "rxjs";
import { CreateTargetSavingModel } from "src/domain/models/financial-goal-model/target-saving-model/commands/create-target-saving.model";
import { UpdateTargetSavingModel } from "src/domain/models/financial-goal-model/target-saving-model/commands/update-target-saving.model";
import { TargetSavingModel } from "src/domain/models/financial-goal-model/target-saving-model/queries/target-saving.model";

export abstract class TargetSavingRepository {
    abstract CreateTargetSavingAsync( saving : CreateTargetSavingModel) : Observable<number>
    abstract UpdateTargetSavingAsync( saving : UpdateTargetSavingModel) : Observable<number>
    abstract DeleteTargetSavingAsync( id : number) : Observable<number>
    abstract GetTargetSavingByIdAsync( user : string | null) : Observable<TargetSavingModel[]>
    abstract GetTargetSavingByStateAsync( params : {user : string, state : string}) : Observable<TargetSavingModel[]>
}