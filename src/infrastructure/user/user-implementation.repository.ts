import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserRepository } from "src/domain/repositories/user-repositories/user.repository";
import { Observable } from 'rxjs';
import { UserModel } from "src/domain/models/user-model/user.model";
import { UserCreateModel } from "src/domain/models/user-model/user-create.model";
import { UserUpdateModel } from "src/domain/models/user-model/user-update.model";

@Injectable({
    providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {
    constructor(private http: HttpClient ){
        super();
    }

    GetUserAsync(userId: string):Observable<UserModel>{
        return this.http.get<UserModel>('https://localhost:7028/api/User/GetUser?id='+userId)
    }

    override CreateUserAsync(user: UserCreateModel): Observable<string> {
        throw new Error("Method not implemented.");
    }
    override UpdateUserAsync(user: UserUpdateModel): Observable<string> {
        throw new Error("Method not implemented.");
    }
    override DeleteUserAsync(userId: string): Observable<string> {
        throw new Error("Method not implemented.");
    }
}