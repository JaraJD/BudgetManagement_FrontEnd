import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { BalanceUpdateModel } from "src/domain/models/user-model/balance-update.model";
import { BalanceRepository } from "src/domain/repositories/user-repositories/balance.repository";

export class UpdateBalanceUseCase implements UseCase<BalanceUpdateModel, string>{
    constructor(private userRepository: BalanceRepository){}

    execute(balance: BalanceUpdateModel): Observable<string> {
        return this.userRepository.UpdateBalanceAsync(balance);
    }
}