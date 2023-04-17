import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CreateBudgetExpenseModel } from "src/domain/models/activity-log-model/budget-expense-model/commands/create-budget-expense.model";
import { UpdateBudgetExpenseModel } from "src/domain/models/activity-log-model/budget-expense-model/commands/update-budget-expense.model";
import { BudgetExpenseModel } from "src/domain/models/activity-log-model/budget-expense-model/queries/budget-expense.model";
import { BudgetExpenseRepository } from "src/domain/repositories/activity-log-repositories/budget-expense.repository";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
})
export class BudgetExpenseImplementationRepository extends BudgetExpenseRepository {

    constructor(private http: HttpClient ){
        super();
    }

    override CreateBudgetExpenseAsync(budget: CreateBudgetExpenseModel): Observable<string> {
        return this.http.post<string>(`${environment.url_backend_activity}/BudgetExpense`, budget);
    }
    override UpdateBudgetExpenseAsync(budget: UpdateBudgetExpenseModel): Observable<string> {
        return this.http.put<string>(`${environment.url_backend_activity}/BudgetExpense`, budget);
    }
    override DeleteBudgetExpenseAsync(id: number): Observable<string> {
        return this.http.delete<string>(`${environment.url_backend_activity}/BudgetExpense?id=${id}`);
    }
    override GetBudgetExpenseByIdAsync(id: number | null): Observable<BudgetExpenseModel[]> {
        return this.http.get<BudgetExpenseModel[]>(`${environment.url_backend_activity}/BudgetExpense?budgetId=${id}`);
    }
    
}
