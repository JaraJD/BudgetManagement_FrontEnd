import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BalanceCreateModel } from "src/domain/models/user-model/balance-create.model";
import { BalanceUpdateModel } from "src/domain/models/user-model/balance-update.model";
import { balanceModel } from "src/domain/models/user-model/balance.model";
import { BalanceRepository } from "src/domain/repositories/user-repositories/balance.repository";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
})
export class BalanceImplementationRepository extends BalanceRepository {

    constructor(private http: HttpClient ){
        super();
    }


    CreateBalanceAsync(balance: BalanceCreateModel): Observable<string> {
        return this.http.post<string>(`${environment.url_backend_user}/Balance`, balance);
    }
    UpdateBalanceAsync(balance: BalanceUpdateModel): Observable<string> {
        return this.http.put<string>(`${environment.url_backend_user}/Balance/UpdateBalance`, balance);
    }
    DeleteBalanceAsync(balanceId: string): Observable<string> {
        return this.http.delete<string>(`${environment.url_backend_user}/Balance/DeleteBalance?id=${balanceId}`);
    }
    GetBalanceAsync(userId: string | null): Observable<balanceModel[]> {
        return this.http.get<balanceModel[]>(`${environment.url_backend_user}/Balance/GetBalanceUser/${userId}`);
    }
    ResetBalanceAsync(balanceId: string): Observable<string> {
        return this.http.put<string>(`${environment.url_backend_user}/Balance/ResetBalance`, balanceId);
    }
    SetBalanceAsync(params: { balanceId: string; value: number; }): Observable<string> {
        return this.http.put<string>(`${environment.url_backend_user}/Balance/SetBalance`, params);
    }
    DeductBalanceAsync(params: { balanceId: string; value: number; }): Observable<string> {
        return this.http.put<string>(`${environment.url_backend_user}/Balance/DeductBalance`, params);
    }
   
}