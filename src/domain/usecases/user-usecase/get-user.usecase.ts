import { Observable } from "rxjs";

import { UseCase } from "src/base/use-case";
import { UserModel } from "../../models/user-model/user.model";
import { UserRepository } from "../../repositories/user-repositories/user.repository";

export class GetUserUseCase implements UseCase<string, UserModel>{

    constructor(private userRepository: UserRepository){}

    execute(userId: string | null): Observable<UserModel> {
        return this.userRepository.GetUserAsync(userId);
    }
}