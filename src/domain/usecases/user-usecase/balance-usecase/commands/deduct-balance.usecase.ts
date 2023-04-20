import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { BalanceRepository } from "src/domain/repositories/user-repositories/balance.repository";

export class SetBalanceUseCase implements UseCase<{balanceId: string, value : number}, string>{
    constructor(private userRepository: BalanceRepository){}

    execute(params : {balanceId: string, value : number}): Observable<string> {
        return this.userRepository.DeductBalanceAsync(params);
    }
}