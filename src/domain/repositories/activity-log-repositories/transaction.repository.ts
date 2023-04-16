import { Observable } from "rxjs";
import { CreateTransactionModel } from "src/domain/models/activity-log-model/transaction-model/commands/create-transaction.model";
import { UpdateTransactionModel } from "src/domain/models/activity-log-model/transaction-model/commands/update-transaction.model";
import { TransactionModel } from "src/domain/models/activity-log-model/transaction-model/queries/transaction.model";

export abstract class TransactionRepository {
    abstract CreateTransactionAsync( transaction : CreateTransactionModel) : Observable<string>
    abstract UpdateTransactionAsync( transaction : UpdateTransactionModel) : Observable<string>
    abstract DeleteTransactionAsync( id : number) : Observable<string>
    abstract GetTransactionByIdAsync( user : string | null) : Observable<TransactionModel[]>
    abstract GetTransactionByDateAsync( params : {user : string, date : string}) : Observable<TransactionModel[]>
    abstract GetTransactionByTypeAsync( params: {user : string, type : string}) : Observable<TransactionModel[]>
    abstract GetTransactionByCategoryAsync( params : {user : string, category : number}) : Observable<TransactionModel[]>
}