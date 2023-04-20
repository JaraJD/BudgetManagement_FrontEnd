import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateBalanceUseCase } from 'src/domain/usecases/user-usecase/balance-usecase/commands/create-balance.usecase';
import Swal from 'sweetalert2';

@Component({
  selector: 'BudgetApp-create-balance',
  templateUrl: './create-balance.component.html',
  styleUrls: ['./create-balance.component.scss']
})
export class CreateBalanceComponent {

  balanceForm: FormGroup;

  constructor(private balanceCreate : CreateBalanceUseCase, private router: Router,){
    this.balanceForm = new FormGroup({
      userId: new FormControl<string | null>(null),
      name: new FormControl<string | null>(null, Validators.required),
      amount: new FormControl<number | null>(null, Validators.required),
    });
  }


  create(){
    this.balanceForm.get('userId')?.setValue(localStorage.getItem('uid'));
    console.log(this.balanceForm.value);

    this.balanceCreate.execute(this.balanceForm.value).subscribe({
      next: budget => {
        console.log(budget),
        Swal.fire(
          'Created',
          'Balance created successfully',
          'success'
        )
      },
      error:err => console.log(err),
      complete: () => {console.log('Complete'), this.router.navigate(["/home"]);}
    });
  }
}
