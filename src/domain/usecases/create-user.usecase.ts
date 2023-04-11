import { Observable } from "rxjs";

import { UseCase } from "src/base/use-case";
import { UserCreateModel } from "../models/user-model/user-create.model";
import { UserRepository } from '../repositories/user-repositories/user.repository';

export class CreateUserUseCase implements UseCase<UserCreateModel, string>{
    constructor(private userRepository: UserRepository){}

    execute(user: UserCreateModel): Observable<string> {
        return this.userRepository.CreateUserAsync(user);
    }
}