import { Observable } from "rxjs";
import { CreateBudgetModel } from "src/domain/models/activity-log-model/budget-model/commands/create-budget.model";
import { SetTotalBudgetModel } from "src/domain/models/activity-log-model/budget-model/commands/set-total-budget.model";
import { UpdateBudgetModel } from "src/domain/models/activity-log-model/budget-model/commands/update-budget.model";
import { BudgetModel } from "src/domain/models/activity-log-model/budget-model/queries/budget.model";

export abstract class BudgetRepository {
    abstract CreateBudgetAsync( budget : CreateBudgetModel) : Observable<string>
    abstract UpdateBudgetAsync( budget : UpdateBudgetModel) : Observable<string>
    abstract DeleteBudgetAsync( id : number) : Observable<string>
    abstract GetBudgetByIdAsync( user : string | null) : Observable<BudgetModel[]>
    abstract GetBudgetByDateAsync( params : {user : string, date : string}) : Observable<BudgetModel[]>
    abstract GetBudgetByNameAsync( params: {user : string, name : string}) : Observable<BudgetModel[]>
    abstract GetBudgetByStateAsync( params : {user : string, state : string}) : Observable<BudgetModel[]>
    abstract SetTotalMonthlyAsync( value : SetTotalBudgetModel) : Observable<string>
}