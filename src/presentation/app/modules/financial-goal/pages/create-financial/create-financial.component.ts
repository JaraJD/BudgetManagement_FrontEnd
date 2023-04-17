import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateTargetSavingUseCase } from 'src/domain/usecases/financial-goal-usecase/target-saving-usecase/commands/create-target-saving.usecase';
import Swal from 'sweetalert2';

@Component({
  selector: 'BudgetApp-create-financial',
  templateUrl: './create-financial.component.html',
  styleUrls: ['./create-financial.component.scss']
})
export class CreateFinancialComponent {

  savingForm: FormGroup;
  
  dates : string = ''

  constructor(private savingCreate : CreateTargetSavingUseCase, private router: Router){
    this.savingForm = new FormGroup({
      idUser: new FormControl<string | null>(null),
      startDate: new FormControl<Date | null>(null, Validators.required),
      endDate: new FormControl<Date | null>(null, Validators.required),
      targetAmount: new FormControl<number | null>(null, Validators.required),
    });
  }

  create(){
    this.savingForm.get('idUser')?.setValue(localStorage.getItem('uid'));
    console.log(this.savingForm.value);

    this.savingCreate.execute(this.savingForm.value).subscribe({
      next: budget => {
        console.log(budget),
        Swal.fire(
          'Created',
          'Target Saving created successfully',
          'success'
        )
      },
      error:err => console.log(err),
      complete: () => {console.log('Complete'), this.router.navigate(["/home/financialGoal/list"]);}
    });

  }
}
