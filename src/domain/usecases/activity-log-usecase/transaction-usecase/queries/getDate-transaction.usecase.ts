import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { TransactionModel } from "src/domain/models/activity-log-model/transaction-model/queries/transaction.model";
import { TransactionRepository } from "src/domain/repositories/activity-log-repositories/transaction.repository";

export class GetTransactionByDateUseCase implements UseCase<{user:string, date:string}, TransactionModel[]>{

    constructor(private repository: TransactionRepository){}

    execute(params : {user : string, date : string}): Observable<TransactionModel[]> {
        return this.repository.GetTransactionByDateAsync(params);
    }

}