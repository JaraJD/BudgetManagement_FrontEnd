import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { TransactionModel } from "src/domain/models/activity-log-model/transaction-model/queries/transaction.model";
import { TransactionRepository } from "src/domain/repositories/activity-log-repositories/transaction.repository";

export class GetTransactionByUserUseCase implements UseCase<string | null, TransactionModel[]>{

    constructor(private repository: TransactionRepository){}

    execute(user : string | null): Observable<TransactionModel[]> {
        return this.repository.GetTransactionByIdAsync(user);
    }

}