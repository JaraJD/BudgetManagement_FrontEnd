import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CreateTransactionModel } from "src/domain/models/activity-log-model/transaction-model/commands/create-transaction.model";
import { UpdateTransactionModel } from "src/domain/models/activity-log-model/transaction-model/commands/update-transaction.model";
import { TransactionModel } from "src/domain/models/activity-log-model/transaction-model/queries/transaction.model";
import { TransactionRepository } from "src/domain/repositories/activity-log-repositories/transaction.repository";

@Injectable({
    providedIn: 'root',
})
export class TransactionImplementationRepository extends TransactionRepository {

    constructor(private http: HttpClient ){
        super();
    }

    CreateTransactionAsync(transaction: CreateTransactionModel): Observable<string> {
        return this.http.post<string>('https://localhost:7264/api/Transaction', transaction);
    }
    UpdateTransactionAsync(transaction: UpdateTransactionModel): Observable<string> {
        return this.http.put<string>('https://localhost:7264/api/Transaction', transaction);
    }
    DeleteTransactionAsync(id: number): Observable<string> {
        return this.http.delete<string>('https://localhost:7264/api/Transaction?id='+ id);
    }
    GetTransactionByIdAsync(user: string): Observable<TransactionModel[]> {
        return this.http.get<TransactionModel[]>('https://localhost:7264/api/Transaction/'+user);
    }
    GetTransactionByDateAsync(params: { user: string; date: string; }): Observable<TransactionModel[]> {
        return this.http.get<TransactionModel[]>('https://localhost:7264/api/Transaction/Date/'+params.user+'/'+params.date);
    }
    GetTransactionByTypeAsync(params: { user: string; type: string; }): Observable<TransactionModel[]> {
        return this.http.get<TransactionModel[]>('https://localhost:7264/api/Transaction/Type/'+params.user+'/'+params.type);
    }
    GetTransactionByCategoryAsync(params: { user: string; category: number; }): Observable<TransactionModel[]> {
        return this.http.get<TransactionModel[]>('https://localhost:7264/api/Transaction/Category/'+params.user+'/'+params.category);
    }
}