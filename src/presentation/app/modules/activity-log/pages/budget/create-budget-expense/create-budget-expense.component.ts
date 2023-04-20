import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { CreateBudgetExpenseModel } from 'src/domain/models/activity-log-model/budget-expense-model/commands/create-budget-expense.model';
import { BudgetExpenseModel } from 'src/domain/models/activity-log-model/budget-expense-model/queries/budget-expense.model';
import { SetTotalBudgetModel } from 'src/domain/models/activity-log-model/budget-model/commands/set-total-budget.model';
import { CreateBudgetExpenseUseCase } from 'src/domain/usecases/activity-log-usecase/budget-expense-usecase/commands/create-budget-expense.usecase';
import { DeleteBudgetExpenseUseCase } from 'src/domain/usecases/activity-log-usecase/budget-expense-usecase/commands/delete-budget-expense.usecase';
import { GetBudgetExpenseByIdUseCase } from 'src/domain/usecases/activity-log-usecase/budget-expense-usecase/queries/get-budget-expense.usecase';
import { SetTotalBudgetUseCase } from 'src/domain/usecases/activity-log-usecase/budget-usecase/commands/set-total-budget.usecase';
import Swal from 'sweetalert2';

@Component({
  selector: 'BudgetApp-create-budget-expense',
  templateUrl: './create-budget-expense.component.html',
  styleUrls: ['./create-budget-expense.component.scss']
})
export class CreateBudgetExpenseComponent {

  budgetId : string = '';
  //budgetList : CreateBudgetExpenseModel[];
  budgetList : BudgetExpenseModel[];
  //budgetListBack : BudgetExpenseModel[];
  budgetExpenseForm: FormGroup;
  setTotalBudget : SetTotalBudgetModel;

  constructor(private budgetExpenseCreate : CreateBudgetExpenseUseCase,
              private budgetExpenseGet : GetBudgetExpenseByIdUseCase,
              private setMonthlyTotal: SetTotalBudgetUseCase,
              private deleteBudgetExpense : DeleteBudgetExpenseUseCase,
              private routeActive: ActivatedRoute,){
      this.setTotalBudget = {
        id : 0,
        amount : 0
      }
      this.budgetList = [];
      //this.budgetListBack = [];
      this.budgetExpenseForm = new FormGroup({
        amount: new FormControl<number | null>(null, Validators.required),
        description: new FormControl<string | null>(null, Validators.required),
        budgetId: new FormControl<number | null>(null),
        categoryId: new FormControl<number | null>(null, Validators.required),
      });
    }

    ngOnInit(): void {
      
      this.budgetId = this.routeActive.snapshot.params['id'];
      
      this.budgetExpenseGet.execute(parseInt(this.budgetId)).subscribe({
        next: transaction => (this.budgetList = transaction, console.log(transaction)),
        error:err => console.log(err),
        complete: () => {console.log('Complete'), 
          /* this.budgetList = this.budgetListBack.map(expense => ({
            amount: expense.amount,
            description: expense.description,
            budgetId: parseInt(this.budgetId), // Asigna el valor correspondiente al id del presupuesto al que pertenece la categoría
            categoryId: 0, // Asigna el valor correspondiente al id de la categoría a la que pertenece el gasto
          })); */
          console.log(this.budgetList)
        ;}
      });
      
    }


    create(){
      this.budgetExpenseForm.get('budgetId')?.setValue(JSON.parse(this.budgetId));
      this.budgetExpenseForm.get('categoryId')?.setValue(JSON.parse(this.budgetExpenseForm.get('categoryId')?.value));
      console.log(this.budgetExpenseForm.value);
      
      this.budgetExpenseCreate.execute(this.budgetExpenseForm.value).subscribe({
        next: budget => {
          console.log(budget)
        },
        error:err => console.log(err),
        complete: () => {console.log('Complete');}
      });

      this.budgetList.push(this.budgetExpenseForm.value);

      this.setTotalBudget = {
        id : parseInt(this.budgetId),
        amount : this.budgetExpenseForm.get('amount')?.value
      }
      this.setTotal(this.setTotalBudget)

      this.budgetExpenseForm.reset();
    }

    setTotal(setTotalBudget : SetTotalBudgetModel){
      console.log(setTotalBudget)
      this.setMonthlyTotal.execute(setTotalBudget).subscribe({
        next: setTotal => {
          console.log(setTotal)
        },
        error:err => console.log(err),
        complete: () => {console.log('Complete');}
      });
    }


    /*remove(id: number, amount: number, index: number){
      this.budgetList.splice(index, 1)
      this.setTotalBudget = {
        id : id,
        amount : amount*-1
      }
      this.deleteBudgetExpense.execute(id).subscribe({
        next: budgetExpense => {
          console.log(budgetExpense)
        },
        error:err => console.log(err),
        complete: () => {console.log('Complete'), this.setTotal(this.setTotalBudget), this.budgetList.splice(index, 1);}
      }); 
    }*/

    remove(id: number, amount: number, index: number){
      this.setTotalBudget = {
        id : parseInt(this.budgetId),
        amount : amount*-1
      }
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
          this.deleteBudgetExpense.execute(id).subscribe({
            next: result => {
              console.log(result),
              Swal.fire(
                'Removed',
                'The item has been removed',
                'success'
              )
            },
            error: err => console.log(err),
            complete: () => {console.log('Complete'),this.setTotal(this.setTotalBudget), this.budgetList.splice(index, 1);}
          });
        }
      });
      
    }



}
