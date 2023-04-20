import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { balanceModel } from "src/domain/models/user-model/balance.model";
import { BalanceRepository } from "src/domain/repositories/user-repositories/balance.repository";

export class GetBalanceUseCase implements UseCase<string, balanceModel[]>{
    constructor(private userRepository: BalanceRepository){}

    execute(id: string | null): Observable<balanceModel[]> {
        return this.userRepository.GetBalanceAsync(id);
    }
}