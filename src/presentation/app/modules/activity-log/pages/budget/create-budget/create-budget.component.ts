import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateBudgetModel } from 'src/domain/models/activity-log-model/budget-model/commands/update-budget.model';
import { BudgetModel } from 'src/domain/models/activity-log-model/budget-model/queries/budget.model';
import { CreateBudgetUseCase } from 'src/domain/usecases/activity-log-usecase/budget-usecase/commands/create-budget.usecase';
import { UdpateBudgetUseCase } from 'src/domain/usecases/activity-log-usecase/budget-usecase/commands/update-budget.usecase';
import Swal from 'sweetalert2';

@Component({
  selector: 'BudgetApp-create-budget',
  templateUrl: './create-budget.component.html',
  styleUrls: ['./create-budget.component.scss']
})
export class CreateBudgetComponent {

  createMode : boolean;

  budgetToUpdate : UpdateBudgetModel;

  budgetForm: FormGroup;
  
  dates : string = ''
  
  id : string = '';

  state : string = '';

  

  constructor(private budgetCreate : CreateBudgetUseCase,
              private budgetUpdate : UdpateBudgetUseCase,
              private router: Router,
              private routeActive: ActivatedRoute,){

    this.budgetToUpdate = {
      id : 0,
      name : '',
      targetMonth : '',
      balance : 0,
      state : ''
    }
    this.createMode = true;
    this.budgetForm = new FormGroup({
      idUser: new FormControl<string | null>(null),
      name: new FormControl<string | null>(null, Validators.required),
      targetMonth: new FormControl<Date | null>(null, Validators.required),
      balance: new FormControl<number | null>(null),
      state: new FormControl<string | null>(null)
    });
  }


  
  ngOnInit(): void {
    if(this.routeActive.snapshot.params['id']){
      this.state = this.routeActive.snapshot.params['state']
      this.createMode = false;
      this.id = this.routeActive.snapshot.params['id'];
    }
    else{
      this.createMode = true;
    }
    
    console.log(this.id)
}



  create(){
    this.budgetForm.get('idUser')?.setValue(localStorage.getItem('uid'));
    this.budgetForm.get('balance')?.setValue(0);
    this.budgetForm.get('state')?.setValue('Pending');
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
      complete: () => {console.log('Complete'), this.router.navigate(["/home/activity/budget/list"]);}
    });
  }

  update(){
    this.budgetToUpdate = {
      id :  parseInt(this.id),
      name : this.budgetForm.get('name')?.value,
      targetMonth : this.budgetForm.get('targetMonth')?.value,
      balance : 0,
      state : this.state
    }
    console.log(this.budgetToUpdate);
    this.budgetUpdate.execute(this.budgetToUpdate).subscribe({
      next: result => {
        console.log(result),
        Swal.fire(
          'Updated',
          'Budget Update successfully',
          'success'
        )
      },
      error:err => console.log(err),
      complete: () => {console.log('Complete'), this.router.navigate(["/home/activity/budget/list"]);}
    });
  }

}
