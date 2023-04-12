import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserRepository } from 'src/domain/repositories/user-repositories/user.repository';
import { GetUserUseCase } from 'src/domain/usecases/get-user.usecase';
import { UserImplementationRepository } from './user/user-implementation.repository';
import { CreateUserUseCase } from 'src/domain/usecases/create-user.usecase';



const getUserUseCaseFactory = 
(userRepo: UserRepository) => new GetUserUseCase(userRepo);
export const getUserUseCaseProvider = {
    provide: GetUserUseCase,
    useFactory: getUserUseCaseFactory,
    deps: [UserRepository],
};


const createUserUseCaseFactory = 
(userRepo: UserRepository) => new CreateUserUseCase(userRepo);
export const createUserUseCaseProvider = {
    provide: CreateUserUseCase,
    useFactory: createUserUseCaseFactory,
    deps: [UserRepository],
};


@NgModule({
  declarations: [],
  providers: [
    getUserUseCaseProvider,
        { provide: UserRepository, useClass: UserImplementationRepository},
    createUserUseCaseProvider,
        { provide: UserRepository, useClass: UserImplementationRepository}
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class InfrastructureModule { }
