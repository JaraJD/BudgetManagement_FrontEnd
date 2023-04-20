import { Observable } from "rxjs";
import { BalanceCreateModel } from "src/domain/models/user-model/balance-create.model";
import { BalanceUpdateModel } from "src/domain/models/user-model/balance-update.model";
import { balanceModel } from "src/domain/models/user-model/balance.model";

export abstract class BalanceRepository {
    abstract CreateBalanceAsync(balance: BalanceCreateModel) : Observable<string>

    abstract UpdateBalanceAsync(balance: BalanceUpdateModel) : Observable<string>

    abstract DeleteBalanceAsync(balanceId: string) : Observable<string>

    abstract GetBalanceAsync(userId: string | null) : Observable<balanceModel[]>

    abstract ResetBalanceAsync(balanceId: string) : Observable<string>

    abstract SetBalanceAsync(params: {balanceId: string, value : number}) : Observable<string>

    abstract DeductBalanceAsync(params : {balanceId: string, value : number}) : Observable<string>

}