import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserRepository } from 'src/domain/repositories/user-repositories/user.repository';
import { GetUserUseCase } from 'src/domain/usecases/user-usecase/get-user.usecase';
import { UserImplementationRepository } from './user/user-implementation.repository';
import { CreateUserUseCase } from 'src/domain/usecases/user-usecase/create-user.usecase';
import { TransactionRepository } from 'src/domain/repositories/activity-log-repositories/transaction.repository';
import { GetTransactionByUserUseCase } from 'src/domain/usecases/activity-log-usecase/transaction-usecase/queries/getUser-transaction.usecase';
import { CreateTransactionUseCase } from 'src/domain/usecases/activity-log-usecase/transaction-usecase/commands/create-transaction.usecase';
import { GetTransactionByDateUseCase } from 'src/domain/usecases/activity-log-usecase/transaction-usecase/queries/getDate-transaction.usecase';
import { TransactionImplementationRepository } from './activity-log/transaction/transaction-implementation.repository';
import { GetTransactionByTypeUseCase } from 'src/domain/usecases/activity-log-usecase/transaction-usecase/queries/getType-transaction.usecase';
import { GetTransactionByCategoryUseCase } from 'src/domain/usecases/activity-log-usecase/transaction-usecase/queries/getCategory-transaction.usecase';
import { BudgetRepository } from 'src/domain/repositories/activity-log-repositories/budget.repository';
import { CreateBudgetUseCase } from 'src/domain/usecases/activity-log-usecase/budget-usecase/commands/create-budget.usecase';
import { GetBudgetByUserUseCase } from 'src/domain/usecases/activity-log-usecase/budget-usecase/queries/getUser-budget.usecase';
import { BudgetImplementationRepository } from './activity-log/budget/budget-implementation.repository';



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





const createTransactionUseCaseFactory = 
(transactionRepo: TransactionRepository) => new CreateTransactionUseCase(transactionRepo);
export const createTransactionUseCaseProvider = {
    provide: CreateTransactionUseCase,
    useFactory: createTransactionUseCaseFactory,
    deps: [TransactionRepository],
};

const getTransactionUseCaseFactory = 
(transactionRepo: TransactionRepository) => new GetTransactionByUserUseCase(transactionRepo);
export const getTransactionUseCaseProvider = {
    provide: GetTransactionByUserUseCase,
    useFactory: getTransactionUseCaseFactory,
    deps: [TransactionRepository],
};

const getTransactionByDateUseCaseFactory = 
(transactionRepo: TransactionRepository) => new GetTransactionByDateUseCase(transactionRepo);
export const getTransactionByDateUseCaseProvider = {
    provide: GetTransactionByDateUseCase,
    useFactory: getTransactionByDateUseCaseFactory,
    deps: [TransactionRepository],
};

const getTransactionByTypeUseCaseFactory = 
(transactionRepo: TransactionRepository) => new GetTransactionByTypeUseCase(transactionRepo);
export const getTransactionByTypeUseCaseProvider = {
    provide: GetTransactionByTypeUseCase,
    useFactory: getTransactionByTypeUseCaseFactory,
    deps: [TransactionRepository],
};

const getTransactionByCategoryUseCaseFactory = 
(transactionRepo: TransactionRepository) => new GetTransactionByCategoryUseCase(transactionRepo);
export const getTransactionByCategoryUseCaseProvider = {
    provide: GetTransactionByCategoryUseCase,
    useFactory: getTransactionByCategoryUseCaseFactory,
    deps: [TransactionRepository],
};





const createBudgetUseCaseFactory = 
(budgetRepo: BudgetRepository) => new CreateBudgetUseCase(budgetRepo);
export const createBudgetUseCaseProvider = {
    provide: CreateBudgetUseCase,
    useFactory: createBudgetUseCaseFactory,
    deps: [BudgetRepository],
};

const getBudgetUseCaseFactory = 
(budgetRepo: BudgetRepository) => new GetBudgetByUserUseCase(budgetRepo);
export const getBudgetUseCaseProvider = {
    provide: GetBudgetByUserUseCase,
    useFactory: getBudgetUseCaseFactory,
    deps: [BudgetRepository],
};

@NgModule({
  declarations: [],
  providers: [
    getUserUseCaseProvider,
        { provide: UserRepository, useClass: UserImplementationRepository},
    createUserUseCaseProvider,
        { provide: UserRepository, useClass: UserImplementationRepository},
    createTransactionUseCaseProvider,
        {provide: TransactionRepository, useClass: TransactionImplementationRepository},
    getTransactionUseCaseProvider,
        {provide: TransactionRepository, useClass: TransactionImplementationRepository},
    getTransactionByDateUseCaseProvider,
        {provide: TransactionRepository, useClass: TransactionImplementationRepository},
    getTransactionByTypeUseCaseProvider,
        {provide: TransactionRepository, useClass: TransactionImplementationRepository},
    getTransactionByCategoryUseCaseProvider,
        {provide: TransactionRepository, useClass: TransactionImplementationRepository},
    createBudgetUseCaseProvider,
        {provide: BudgetRepository, useClass: BudgetImplementationRepository},
    getBudgetUseCaseProvider,
        {provide: BudgetRepository, useClass: BudgetImplementationRepository},
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class InfrastructureModule { }
