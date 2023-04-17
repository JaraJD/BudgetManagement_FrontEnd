import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateBudgetUseCase } from 'src/domain/usecases/activity-log-usecase/budget-usecase/commands/create-budget.usecase';
import Swal from 'sweetalert2';

@Component({
  selector: 'BudgetApp-create-budget',
  templateUrl: './create-budget.component.html',
  styleUrls: ['./create-budget.component.scss']
})
export class CreateBudgetComponent {

  budgetForm: FormGroup;
  
  dates : string = ''

  

  constructor(private budgetCreate : CreateBudgetUseCase, private router: Router){
    /* this.transactionToCreate = {
      date : '',
    } */
    this.budgetForm = new FormGroup({
      idUser: new FormControl<string | null>(null),
      name: new FormControl<string | null>(null, Validators.required),
      targetMonth: new FormControl<Date | null>(null, Validators.required),
      balance: new FormControl<number | null>(null, Validators.required),
      state: new FormControl<string | null>(null)
    });
  }

  create(){
    this.budgetForm.get('idUser')?.setValue(localStorage.getItem('uid'));
    console.log(this.budgetForm.value);

    this.budgetCreate.execute(this.budgetForm.value).subscribe({
      next: budget => {
        console.log(budget),
        Swal.fire(
          'Created',
          'Budget created successfully',
          'success'
        )
      },
      error:err => console.log(err),
      complete: () => {console.log('Complete'), this.router.navigate(["/home/activity/Budget/list"]);}
    });
  }

}
