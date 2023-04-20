import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CreateBudgetModel } from "src/domain/models/activity-log-model/budget-model/commands/create-budget.model";
import { SetTotalBudgetModel } from "src/domain/models/activity-log-model/budget-model/commands/set-total-budget.model";
import { UpdateBudgetModel } from "src/domain/models/activity-log-model/budget-model/commands/update-budget.model";
import { BudgetModel } from "src/domain/models/activity-log-model/budget-model/queries/budget.model";
import { BudgetRepository } from "src/domain/repositories/activity-log-repositories/budget.repository";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
})
export class BudgetImplementationRepository extends BudgetRepository {


    constructor(private http: HttpClient ){
        super();
    }

    CreateBudgetAsync(budget: CreateBudgetModel): Observable<string> {
        return this.http.post<string>(`${environment.url_backend_activity}/Budget`, budget);
    }
    UpdateBudgetAsync(budget: UpdateBudgetModel): Observable<string> {
        return this.http.put<string>(`${environment.url_backend_activity}/Budget`, budget);
    }
    DeleteBudgetAsync(id: number): Observable<string> {
        return this.http.delete<string>(`${environment.url_backend_activity}/Budget/Delete/${id}`);
    }
    GetBudgetByIdAsync(user: string | null): Observable<BudgetModel[]> {
        return this.http.get<BudgetModel[]>(`${environment.url_backend_activity}/Budget/${user}`);
    }
    GetBudgetByDateAsync(params: { user: string; date: string; }): Observable<BudgetModel[]> {
        return this.http.get<BudgetModel[]>(`${environment.url_backend_activity}/Budget/Date/${params.user}/${params.date}`);
    }
    GetBudgetByNameAsync(params: { user: string; name: string; }): Observable<BudgetModel[]> {
        return this.http.get<BudgetModel[]>(`${environment.url_backend_activity}/Budget/Name/${params.user}/${params.name}`);
    }
    GetBudgetByStateAsync(params: { user: string; state: string; }): Observable<BudgetModel[]> {
        return this.http.get<BudgetModel[]>(`${environment.url_backend_activity}/Budget/State/${params.user}/${params.state}`);
    }
    SetTotalMonthlyAsync(value: SetTotalBudgetModel): Observable<string> {
        return this.http.put<string>(`${environment.url_backend_activity}/Budget/SetTotalMonthly`, value);
    }


}