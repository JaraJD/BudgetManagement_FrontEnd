import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { UpdateTransactionModel } from "src/domain/models/activity-log-model/transaction-model/commands/update-transaction.model";
import { TransactionRepository } from "src/domain/repositories/activity-log-repositories/transaction.repository";

export class UdpateTransactionUseCase implements UseCase<UpdateTransactionModel, string>{

    constructor(private repository: TransactionRepository){}

    execute(transaction: UpdateTransactionModel): Observable<string> {
        return this.repository.UpdateTransactionAsync(transaction);
    }

}