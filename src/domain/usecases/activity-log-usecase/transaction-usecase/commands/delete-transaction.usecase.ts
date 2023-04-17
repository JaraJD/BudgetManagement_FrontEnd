import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { TransactionRepository } from "src/domain/repositories/activity-log-repositories/transaction.repository";

export class DeleteTransactionUseCase implements UseCase<number, string>{

    constructor(private repository: TransactionRepository){}

    execute(id: number): Observable<string> {
        return this.repository.DeleteTransactionAsync(id);
    }

}