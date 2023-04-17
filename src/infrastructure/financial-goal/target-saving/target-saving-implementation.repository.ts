import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CreateTargetSavingModel } from "src/domain/models/financial-goal-model/target-saving-model/commands/create-target-saving.model";
import { UpdateTargetSavingModel } from "src/domain/models/financial-goal-model/target-saving-model/commands/update-target-saving.model";
import { TargetSavingModel } from "src/domain/models/financial-goal-model/target-saving-model/queries/target-saving.model";
import { TargetSavingRepository } from "src/domain/repositories/financial-goal-repositories/target-saving.repository";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
})
export class TargetSavingImplementationRepository extends TargetSavingRepository {
    
    constructor(private http: HttpClient ){
        super();
    }

    CreateTargetSavingAsync(saving: CreateTargetSavingModel): Observable<number> {
        return this.http.post<number>(`${environment.url_backend_financial}/TargetSaving`, saving);
    }
    UpdateTargetSavingAsync(saving: UpdateTargetSavingModel): Observable<number> {
        return this.http.put<number>(`${environment.url_backend_financial}/TargetSaving`, saving);
    }
    DeleteTargetSavingAsync(id: number): Observable<number> {
        return this.http.delete<number>(`${environment.url_backend_financial}/TargetSaving?id=${id}`);
    }
    GetTargetSavingByIdAsync(user: string | null): Observable<TargetSavingModel[]> {
        return this.http.get<TargetSavingModel[]>(`${environment.url_backend_financial}/TargetSaving/${user}`);
    }
    GetTargetSavingByStateAsync(params: { user: string; state: string; }): Observable<TargetSavingModel[]> {
        return this.http.get<TargetSavingModel[]>(`${environment.url_backend_financial}/TargetSaving/${params.user}/${params.state}`);
    }

}