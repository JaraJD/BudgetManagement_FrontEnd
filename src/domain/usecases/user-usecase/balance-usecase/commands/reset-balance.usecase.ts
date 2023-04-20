import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { BalanceRepository } from "src/domain/repositories/user-repositories/balance.repository";

export class ResetBalanceUseCase implements UseCase<string, string>{
    constructor(private userRepository: BalanceRepository){}

    execute(id: string): Observable<string> {
        return this.userRepository.ResetBalanceAsync(id);
    }
}