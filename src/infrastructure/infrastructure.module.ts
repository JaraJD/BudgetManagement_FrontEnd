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
import { TargetSavingRepository } from 'src/domain/repositories/financial-goal-repositories/target-saving.repository';
import { CreateTargetSavingUseCase } from 'src/domain/usecases/financial-goal-usecase/target-saving-usecase/commands/create-target-saving.usecase';
import { GetTargetSavingByUserUseCase } from 'src/domain/usecases/financial-goal-usecase/target-saving-usecase/queries/getUser-target-saving.usecase';
import { TargetSavingImplementationRepository } from './financial-goal/target-saving/target-saving-implementation.repository';
import { SetTotalBudgetUseCase } from 'src/domain/usecases/activity-log-usecase/budget-usecase/commands/set-total-budget.usecase';
import { DeleteBudgetUseCase } from 'src/domain/usecases/activity-log-usecase/budget-usecase/commands/delete-budget.usecase';
import { UdpateBudgetUseCase } from 'src/domain/usecases/activity-log-usecase/budget-usecase/commands/update-budget.usecase';
import { BudgetExpenseRepository } from 'src/domain/repositories/activity-log-repositories/budget-expense.repository';
import { CreateBudgetExpenseUseCase } from 'src/domain/usecases/activity-log-usecase/budget-expense-usecase/commands/create-budget-expense.usecase';
import { GetBudgetExpenseByIdUseCase } from 'src/domain/usecases/activity-log-usecase/budget-expense-usecase/queries/get-budget-expense.usecase';
import { UdpateBudgetExpenseUseCase } from 'src/domain/usecases/activity-log-usecase/budget-expense-usecase/commands/update-budget-expense.usecase';
import { DeleteBudgetExpenseUseCase } from 'src/domain/usecases/activity-log-usecase/budget-expense-usecase/commands/delete-budget-expense.usecase';
import { CreateBalanceUseCase } from 'src/domain/usecases/user-usecase/balance-usecase/commands/create-balance.usecase';
import { BalanceRepository } from 'src/domain/repositories/user-repositories/balance.repository';
import { GetBalanceUseCase } from 'src/domain/usecases/user-usecase/balance-usecase/queries/get-balance.usecase';
import { DeleteBalanceUseCase } from 'src/domain/usecases/user-usecase/balance-usecase/commands/delete-balance.usecase';
import { UpdateBalanceUseCase } from 'src/domain/usecases/user-usecase/balance-usecase/commands/update-balance.usecase';
import { ResetBalanceUseCase } from 'src/domain/usecases/user-usecase/balance-usecase/commands/reset-balance.usecase';
import { SetBalanceUseCase } from 'src/domain/usecases/user-usecase/balance-usecase/commands/deduct-balance.usecase';
import { DeductBalanceUseCase } from 'src/domain/usecases/user-usecase/balance-usecase/commands/set-balance.usecase';
import { GetBudgetByDateUseCase } from 'src/domain/usecases/activity-log-usecase/budget-usecase/queries/getDate-budget.usecase';
import { GetBudgetByNameUseCase } from 'src/domain/usecases/activity-log-usecase/budget-usecase/queries/getName-budget.usecase';
import { GetBudgetByStateUseCase } from 'src/domain/usecases/activity-log-usecase/budget-usecase/queries/getState-budget.usecase';
import { UdpateTransactionUseCase } from 'src/domain/usecases/activity-log-usecase/transaction-usecase/commands/update-transaction.usecase';
import { DeleteTransactionUseCase } from 'src/domain/usecases/activity-log-usecase/transaction-usecase/commands/delete-transaction.usecase';
import { UpdateTargetSavingUseCase } from 'src/domain/usecases/financial-goal-usecase/target-saving-usecase/commands/update-target-saving.usecase';
import { GetTargetSavingByStateUseCase } from 'src/domain/usecases/financial-goal-usecase/target-saving-usecase/queries/getState-target.saving.usecase';
import { DeleteTargetSavingUseCase } from 'src/domain/usecases/financial-goal-usecase/target-saving-usecase/commands/delete-target.saving.usecase';
import { BalanceImplementationRepository } from './user/balance/balance-implementation.repository';
import { BudgetExpenseImplementationRepository } from './activity-log/budget-expense/budget-expense-implementation.repository';


//--------------USER--------------------------------------

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

//-----------------BALANCE----------------------------------------------

const createBalanceUseCaseFactory = 
(balanceRepo: BalanceRepository) => new CreateBalanceUseCase(balanceRepo);
export const createBalanceUseCaseProvider = {
    provide: CreateBalanceUseCase,
    useFactory: createBalanceUseCaseFactory,
    deps: [BalanceRepository],
};

const getBalanceUseCaseFactory = 
(balanceRepo: BalanceRepository) => new GetBalanceUseCase(balanceRepo);
export const getBalanceUseCaseProvider = {
    provide: GetBalanceUseCase,
    useFactory: getBalanceUseCaseFactory,
    deps: [BalanceRepository],
};

const deleteBalanceUseCaseFactory = 
(balanceRepo: BalanceRepository) => new DeleteBalanceUseCase(balanceRepo);
export const deleteBalanceUseCaseProvider = {
    provide: DeleteBalanceUseCase,
    useFactory: deleteBalanceUseCaseFactory,
    deps: [BalanceRepository],
};

const updateBalanceUseCaseFactory = 
(balanceRepo: BalanceRepository) => new UpdateBalanceUseCase(balanceRepo);
export const updateBalanceUseCaseProvider = {
    provide: UpdateBalanceUseCase,
    useFactory: updateBalanceUseCaseFactory,
    deps: [BalanceRepository],
};

const resetBalanceUseCaseFactory = 
(balanceRepo: BalanceRepository) => new ResetBalanceUseCase(balanceRepo);
export const resetBalanceUseCaseProvider = {
    provide: ResetBalanceUseCase,
    useFactory: resetBalanceUseCaseFactory,
    deps: [BalanceRepository],
};

const setBalanceUseCaseFactory = 
(balanceRepo: BalanceRepository) => new SetBalanceUseCase(balanceRepo);
export const setBalanceUseCaseProvider = {
    provide: SetBalanceUseCase,
    useFactory: setBalanceUseCaseFactory,
    deps: [BalanceRepository],
};

const deductBalanceUseCaseFactory = 
(balanceRepo: BalanceRepository) => new DeductBalanceUseCase(balanceRepo);
export const deductBalanceUseCaseProvider = {
    provide: DeductBalanceUseCase,
    useFactory: deductBalanceUseCaseFactory,
    deps: [BalanceRepository],
};

//----------------------TRANSACTION-----------------------------------------


const createTransactionUseCaseFactory = 
(transactionRepo: TransactionRepository) => new CreateTransactionUseCase(transactionRepo);
export const createTransactionUseCaseProvider = {
    provide: CreateTransactionUseCase,
    useFactory: createTransactionUseCaseFactory,
    deps: [TransactionRepository],
};

const getTransactionUseCaseFactory = 
(transactionRepo: TransactionRepository) => new GetTransactionByUserUseCase(transactionRepo);
export const getTransactionByUserUseCaseProvider = {
    provide: GetTransactionByUserUseCase,
    useFactory: getTransactionUseCaseFactory,
    deps: [TransactionRepository],
};

const updateTransactionUseCaseFactory = 
(transactionRepo: TransactionRepository) => new UdpateTransactionUseCase(transactionRepo);
export const updateTransactionUseCaseProvider = {
    provide: UdpateTransactionUseCase,
    useFactory: updateTransactionUseCaseFactory,
    deps: [TransactionRepository],
};

const deleteTransactionUseCaseFactory = 
(transactionRepo: TransactionRepository) => new DeleteTransactionUseCase(transactionRepo);
export const deleteTransactionUseCaseProvider = {
    provide: DeleteTransactionUseCase,
    useFactory:deleteTransactionUseCaseFactory,
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


//----------------TARGET SAVING -------------------------------------------------


const createTargetSavingUseCaseFactory = 
(targetSavingRepo: TargetSavingRepository) => new CreateTargetSavingUseCase(targetSavingRepo);
export const createTargetSavingUseCaseProvider = {
    provide: CreateTargetSavingUseCase,
    useFactory: createTargetSavingUseCaseFactory,
    deps: [TargetSavingRepository],
};

const updateTargetSavingUseCaseFactory = 
(targetSavingRepo: TargetSavingRepository) => new UpdateTargetSavingUseCase(targetSavingRepo);
export const updateTargetSavingUseCaseProvider = {
    provide: UpdateTargetSavingUseCase,
    useFactory: updateTargetSavingUseCaseFactory,
    deps: [TargetSavingRepository],
};

const deleteTargetSavingUseCaseFactory = 
(targetSavingRepo: TargetSavingRepository) => new DeleteTargetSavingUseCase(targetSavingRepo);
export const deleteTargetSavingUseCaseProvider = {
    provide: DeleteTargetSavingUseCase,
    useFactory: deleteTargetSavingUseCaseFactory,
    deps: [TargetSavingRepository],
};

const getTargetSavingByStateUseCaseFactory = 
(targetSavingRepo: TargetSavingRepository) => new GetTargetSavingByStateUseCase(targetSavingRepo);
export const getTargetSavingByStateUseCaseProvider = {
    provide: GetTargetSavingByStateUseCase,
    useFactory: getTargetSavingByStateUseCaseFactory,
    deps: [TargetSavingRepository],
};

const getTargetSavingUseCaseFactory = 
(targetSavingRepo: TargetSavingRepository) => new GetTargetSavingByUserUseCase(targetSavingRepo);
export const getTargetSavingUseCaseProvider = {
    provide: GetTargetSavingByUserUseCase,
    useFactory: getTargetSavingUseCaseFactory,
    deps: [TargetSavingRepository],
};


//------------------BUDGET---------------------------------------------


const createBudgetUseCaseFactory = 
(budgetRepo: BudgetRepository) => new CreateBudgetUseCase(budgetRepo);
export const createBudgetUseCaseProvider = {
    provide: CreateBudgetUseCase,
    useFactory: createBudgetUseCaseFactory,
    deps: [BudgetRepository],
};

const updateBudgetUseCaseFactory = 
(budgetRepo: BudgetRepository) => new UdpateBudgetUseCase(budgetRepo);
export const updateBudgetUseCaseProvider = {
    provide: UdpateBudgetUseCase,
    useFactory: updateBudgetUseCaseFactory,
    deps: [BudgetRepository],
};

const deleteBudgetUseCaseFactory = 
(budgetRepo: BudgetRepository) => new DeleteBudgetUseCase(budgetRepo);
export const deleteBudgetUseCaseProvider = {
    provide: DeleteBudgetUseCase,
    useFactory: deleteBudgetUseCaseFactory,
    deps: [BudgetRepository],
};

const getBudgetByDateUseCaseFactory = 
(budgetRepo: BudgetRepository) => new GetBudgetByDateUseCase(budgetRepo);
export const getBudgetByDateUseCaseProvider = {
    provide: GetBudgetByDateUseCase,
    useFactory: getBudgetByDateUseCaseFactory,
    deps: [BudgetRepository],
};

const getBudgetByNameUseCaseFactory = 
(budgetRepo: BudgetRepository) => new GetBudgetByNameUseCase(budgetRepo);
export const getBudgetByNameUseCaseProvider = {
    provide: GetBudgetByNameUseCase,
    useFactory: getBudgetByNameUseCaseFactory,
    deps: [BudgetRepository],
};

const getBudgetByStateUseCaseFactory = 
(budgetRepo: BudgetRepository) => new GetBudgetByStateUseCase(budgetRepo);
export const getBudgetByStateUseCaseProvider = {
    provide: GetBudgetByStateUseCase,
    useFactory: getBudgetByStateUseCaseFactory,
    deps: [BudgetRepository],
};

const getBudgetUseCaseFactory = 
(budgetRepo: BudgetRepository) => new GetBudgetByUserUseCase(budgetRepo);
export const getBudgetUseCaseProvider = {
    provide: GetBudgetByUserUseCase,
    useFactory: getBudgetUseCaseFactory,
    deps: [BudgetRepository],
};

const setTotalBudgetUseCaseFactory = 
(budgetRepo: BudgetRepository) => new SetTotalBudgetUseCase(budgetRepo);
export const setTotalBudgetUseCaseProvider = {
    provide: SetTotalBudgetUseCase,
    useFactory: setTotalBudgetUseCaseFactory,
    deps: [BudgetRepository],
};



//-----------------BUDGET EXPENSE----------------------------------------


const createBudgetExpenseUseCaseFactory = 
(budgetExpenseRepo: BudgetExpenseRepository) => new CreateBudgetExpenseUseCase(budgetExpenseRepo);
export const createBudgetExpenseUseCaseProvider = {
    provide: CreateBudgetExpenseUseCase,
    useFactory: createBudgetExpenseUseCaseFactory,
    deps: [BudgetExpenseRepository],
};

const getBudgetExpenseByIdUseCaseFactory = 
(budgetExpenseRepo: BudgetExpenseRepository) => new GetBudgetExpenseByIdUseCase(budgetExpenseRepo);
export const getBudgetExpenseByIdUseCaseProvider = {
    provide: GetBudgetExpenseByIdUseCase,
    useFactory: getBudgetExpenseByIdUseCaseFactory,
    deps: [BudgetExpenseRepository],
};

const updateBudgetExpenseUseCaseFactory = 
(budgetExpenseRepo: BudgetExpenseRepository) => new UdpateBudgetExpenseUseCase(budgetExpenseRepo);
export const updateBudgetExpenseUseCaseProvider = {
    provide: UdpateBudgetExpenseUseCase,
    useFactory: updateBudgetExpenseUseCaseFactory,
    deps: [BudgetExpenseRepository],
};

const deleteBudgetExpenseUseCaseFactory = 
(budgetExpenseRepo: BudgetExpenseRepository) => new DeleteBudgetExpenseUseCase(budgetExpenseRepo);
export const deleteBudgetExpenseUseCaseProvider = {
    provide: DeleteBudgetExpenseUseCase,
    useFactory: deleteBudgetExpenseUseCaseFactory,
    deps: [BudgetExpenseRepository],
};





@NgModule({
  declarations: [],
  providers: [
    getUserUseCaseProvider,
        { provide: UserRepository, useClass: UserImplementationRepository},
    createUserUseCaseProvider,
        { provide: UserRepository, useClass: UserImplementationRepository},


    createBalanceUseCaseProvider,
        {provide: BalanceRepository, useClass: BalanceImplementationRepository}, 
    getBalanceUseCaseProvider,
        {provide: BalanceRepository, useClass: BalanceImplementationRepository},
    deleteBalanceUseCaseProvider,
        {provide: BalanceRepository, useClass: BalanceImplementationRepository},
    updateBalanceUseCaseProvider,
        {provide: BalanceRepository, useClass: BalanceImplementationRepository},
    resetBalanceUseCaseProvider,
        {provide: BalanceRepository, useClass: BalanceImplementationRepository},
    setBalanceUseCaseProvider,
        {provide: BalanceRepository, useClass: BalanceImplementationRepository},
    deductBalanceUseCaseProvider,
        {provide: BalanceRepository, useClass: BalanceImplementationRepository},


    createTransactionUseCaseProvider,
        {provide: TransactionRepository, useClass: TransactionImplementationRepository},
    getTransactionByUserUseCaseProvider,
        {provide: TransactionRepository, useClass: TransactionImplementationRepository},
    updateTransactionUseCaseProvider,
        {provide: TransactionRepository, useClass: TransactionImplementationRepository},
    deleteTransactionUseCaseProvider,
        {provide: TransactionRepository, useClass: TransactionImplementationRepository},
    getTransactionByDateUseCaseProvider,
        {provide: TransactionRepository, useClass: TransactionImplementationRepository},
    getTransactionByTypeUseCaseProvider,
        {provide: TransactionRepository, useClass: TransactionImplementationRepository},
    getTransactionByCategoryUseCaseProvider,
        {provide: TransactionRepository, useClass: TransactionImplementationRepository},


    createBudgetUseCaseProvider,
        {provide: BudgetRepository, useClass: BudgetImplementationRepository},
    updateBudgetUseCaseProvider,
        {provide: BudgetRepository, useClass: BudgetImplementationRepository},
    deleteBudgetUseCaseProvider,
        {provide: BudgetRepository, useClass: BudgetImplementationRepository},
    getBudgetUseCaseProvider,
        {provide: BudgetRepository, useClass: BudgetImplementationRepository},
    getBudgetByNameUseCaseProvider,
        {provide: BudgetRepository, useClass: BudgetImplementationRepository},
    getBudgetByStateUseCaseProvider,
        {provide: BudgetRepository, useClass: BudgetImplementationRepository},
    getBudgetByDateUseCaseProvider,
        {provide: BudgetRepository, useClass: BudgetImplementationRepository},
    setTotalBudgetUseCaseProvider,
        {provide: BudgetRepository, useClass: BudgetImplementationRepository},


    createTargetSavingUseCaseProvider,
        {provide: TargetSavingRepository, useClass: TargetSavingImplementationRepository},
    updateTargetSavingUseCaseProvider,
        {provide: TargetSavingRepository, useClass: TargetSavingImplementationRepository},
    deleteTargetSavingUseCaseProvider,
        {provide: TargetSavingRepository, useClass: TargetSavingImplementationRepository},
    getTargetSavingByStateUseCaseProvider,
        {provide: TargetSavingRepository, useClass: TargetSavingImplementationRepository},
    getTargetSavingUseCaseProvider,
        {provide: TargetSavingRepository, useClass: TargetSavingImplementationRepository},


    createBudgetExpenseUseCaseProvider,
        {provide: BudgetExpenseRepository, useClass: BudgetExpenseImplementationRepository},
    getBudgetExpenseByIdUseCaseProvider,
        {provide: BudgetExpenseRepository, useClass: BudgetExpenseImplementationRepository},
    updateBudgetExpenseUseCaseProvider,
        {provide: BudgetExpenseRepository, useClass: BudgetExpenseImplementationRepository},
    deleteBudgetExpenseUseCaseProvider,
        {provide: BudgetExpenseRepository, useClass: BudgetExpenseImplementationRepository},


  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class InfrastructureModule { }
