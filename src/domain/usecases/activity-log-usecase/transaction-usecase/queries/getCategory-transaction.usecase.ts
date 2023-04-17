import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { TransactionModel } from "src/domain/models/activity-log-model/transaction-model/queries/transaction.model";
import { TransactionRepository } from "src/domain/repositories/activity-log-repositories/transaction.repository";

export class GetTransactionByCategoryUseCase implements UseCase<{user:string | null, category:number}, TransactionModel[]>{

    constructor(private repository: TransactionRepository){}

    execute(params : {user : string | null, category : number}): Observable<TransactionModel[]> {
        return this.repository.GetTransactionByCategoryAsync(params);
    }

}