import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { BalanceCreateModel } from "src/domain/models/user-model/balance-create.model";
import { BalanceRepository } from "src/domain/repositories/user-repositories/balance.repository";

export class CreateBalanceUseCase implements UseCase<BalanceCreateModel, string>{
    constructor(private userRepository: BalanceRepository){}

    execute(balance: BalanceCreateModel): Observable<string> {
        return this.userRepository.CreateBalanceAsync(balance);
    }
}