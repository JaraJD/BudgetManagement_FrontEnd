import { Observable } from "rxjs";
import { UserCreateModel } from "src/domain/models/user-model/user-create.model";
import { UserUpdateModel } from "src/domain/models/user-model/user-update.model";
import { UserModel } from "src/domain/models/user-model/user.model";

export abstract class UserRepository {
    abstract CreateUserAsync(user: UserCreateModel) : Observable<string>

    abstract UpdateUserAsync(user: UserUpdateModel) : Observable<string>

    abstract DeleteUserAsync(userId: string) : Observable<string>

    abstract GetUserAsync(userId: string | null) : Observable<UserModel>
}