import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateBudgetModel } from 'src/domain/models/activity-log-model/budget-model/commands/update-budget.model';
import { BudgetModel } from 'src/domain/models/activity-log-model/budget-model/queries/budget.model';
import { CreateTransactionModel } from 'src/domain/models/activity-log-model/transaction-model/commands/create-transaction.model';
import { DeleteBudgetUseCase } from 'src/domain/usecases/activity-log-usecase/budget-usecase/commands/delete-budget.usecase';
import { UdpateBudgetUseCase } from 'src/domain/usecases/activity-log-usecase/budget-usecase/commands/update-budget.usecase';
import { CreateTransactionUseCase } from 'src/domain/usecases/activity-log-usecase/transaction-usecase/commands/create-transaction.usecase';
import { DeductBalanceUseCase } from 'src/domain/usecases/user-usecase/balance-usecase/commands/deduct-balance.usecase';
import Swal from 'sweetalert2';


@Component({
  selector: 'BudgetApp-list-budget',
  templateUrl: './list-budget.component.html',
  styleUrls: ['./list-budget.component.scss']
})
export class ListBudgetComponent {

  @Input() budgets: BudgetModel[];

  budgetToUpdate : UpdateBudgetModel;

  constructor(private router: Router,
              private budgetUpdate : UdpateBudgetUseCase,
              private deleteUpdate : DeleteBudgetUseCase,
              private deduct : DeductBalanceUseCase,
              private transactionCreate : CreateTransactionUseCase
              ){

    this.budgetToUpdate = {
      id : 0,
      name : '',
      targetMonth : '',
      balance : 0,
      state : ''
    }
    this.budgets = [];
  } 

  add(budget : number){
    this.router.navigate(["/home/activity/budget/create/BudgetExpense/"+ budget]);
  }

  update(id : number, state : string){
    this.router.navigate(["/home/activity/budget/update/"+ id+"/"+state]);
  }

  updateState(budget : BudgetModel, index : number){
    this.budgetToUpdate = {
      id :  budget.id,
      name : budget.name,
      targetMonth : budget.targetMonth,
      balance : 0,
      state : 'Done'
    }

    Swal.fire({
      title: 'Complete Item',
      text: "Do you want to complete item?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Complete'
    }).then((result) => {
      if(result.isConfirmed && budget.state == 'Pending'){
        this.budgetUpdate.execute(this.budgetToUpdate).subscribe({
          next: result => {
            console.log(result),
            Swal.fire(
              'Complete',
              'Item completed',
              'success'
            )
          },
          error: err => console.log(err),
          complete: () => {
            console.log('Complete'),
            this.budgets[index].state = 'Done',
            this.deductBalance(this.budgets[index].monthlyTotal),
            this.resgisterTransaction(this.budgets[index].monthlyTotal, this.budgets[index].name, this.budgets[index].id);}
        });
      }
    });

  }



  deleteBudget(id : number, index: number){
    console.log(id)
    Swal.fire({
      title: 'Delete Item',
      text: "Do you want to delete the item?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete'
    }).then((result) => {
      if(result.isConfirmed){
        this.deleteUpdate.execute(id).subscribe({
          next: result => {
            console.log(result),
            Swal.fire(
              'Removed',
              'The item has been removed',
              'success'
            )
          },
          error: err => console.log(err),
          complete: () => {console.log('Complete'), this.budgets.splice(index, 1);}
        });
      }
    });
    
  }


  deductBalance(value: number){
    this.deduct.execute({balanceId:'643f6f43377ca7c4a290e670',value : value}).subscribe({
      next: result => console.log(result),
      error: err => console.log(err),
      complete: () => {console.log('Complete');}
    });
  }


  resgisterTransaction(amount : number, name : string, id : number){
    const dateActually = new Date (Date.now());

    const transactionToCreate : CreateTransactionModel = {
      date : dateActually.toJSON(),
      type : 'Payment',
      amount : amount,
      description : `Pay of ${name}`,
      userId : localStorage.getItem('uid'),
      categoryId : 11,
      budgetId : id
    }
    console.log(transactionToCreate);

    this.transactionCreate.execute(transactionToCreate).subscribe({
      next: transaction =>console.log(transaction),
      error:err => console.log(err),
      complete: () => {console.log('Complete');}
    });
  }
  
}
