import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { CreateTransactionModel } from "src/domain/models/activity-log-model/transaction-model/commands/create-transaction.model";
import { TransactionRepository } from "src/domain/repositories/activity-log-repositories/transaction.repository";

export class CreateTransactionUseCase implements UseCase<CreateTransactionModel, string>{

    constructor(private repository: TransactionRepository){}

    execute(transaction: CreateTransactionModel): Observable<string> {
        return this.repository.CreateTransactionAsync(transaction);
    }

}