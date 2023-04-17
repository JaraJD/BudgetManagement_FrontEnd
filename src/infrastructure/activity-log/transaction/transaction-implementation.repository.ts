import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CreateTransactionModel } from "src/domain/models/activity-log-model/transaction-model/commands/create-transaction.model";
import { UpdateTransactionModel } from "src/domain/models/activity-log-model/transaction-model/commands/update-transaction.model";
import { TransactionModel } from "src/domain/models/activity-log-model/transaction-model/queries/transaction.model";
import { TransactionRepository } from "src/domain/repositories/activity-log-repositories/transaction.repository";
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root',
})
export class TransactionImplementationRepository extends TransactionRepository {

    constructor(private http: HttpClient ){
        super();
    }

    CreateTransactionAsync(transaction: CreateTransactionModel): Observable<string> {
        return this.http.post<string>(`${environment.url_backend_activity}/Transaction`, transaction);
    }
    UpdateTransactionAsync(transaction: UpdateTransactionModel): Observable<string> {
        return this.http.put<string>(`${environment.url_backend_activity}/Transaction`, transaction);
    }
    DeleteTransactionAsync(id: number): Observable<string> {
        return this.http.delete<string>(`${environment.url_backend_activity}/Transaction?id=${id}`);
    }
    GetTransactionByIdAsync(user: string): Observable<TransactionModel[]> {
        return this.http.get<TransactionModel[]>(`${environment.url_backend_activity}/Transaction/${user}`);
    }
    GetTransactionByDateAsync(params: { user: string; date: string; }): Observable<TransactionModel[]> {
        return this.http.get<TransactionModel[]>(`${environment.url_backend_activity}/Transaction/Date/${params.user}/${params.date}`);
    }
    GetTransactionByTypeAsync(params: { user: string; type: string; }): Observable<TransactionModel[]> {
        return this.http.get<TransactionModel[]>(`${environment.url_backend_activity}/Transaction/Type/${params.user}/${params.type}`);
    }
    GetTransactionByCategoryAsync(params: { user: string; category: number; }): Observable<TransactionModel[]> {
        return this.http.get<TransactionModel[]>(`${environment.url_backend_activity}/Transaction/Category/${params.user}/${params.category}`);
    }
}