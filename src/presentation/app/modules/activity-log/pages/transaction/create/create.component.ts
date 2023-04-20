import { Component, PipeTransform } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateTransactionModel } from 'src/domain/models/activity-log-model/transaction-model/commands/create-transaction.model';
import { CreateTransactionUseCase } from 'src/domain/usecases/activity-log-usecase/transaction-usecase/commands/create-transaction.usecase';
import { DeductBalanceUseCase } from 'src/domain/usecases/user-usecase/balance-usecase/commands/deduct-balance.usecase';
import { SetBalanceUseCase } from 'src/domain/usecases/user-usecase/balance-usecase/commands/set-balance.usecase';
import Swal from 'sweetalert2';

@Component({
  selector: 'BudgetApp-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  transactionForm: FormGroup;
  //transactionToCreate : CreateTransactionModel;
  dates : string = ''

  constructor(private transactionCreate : CreateTransactionUseCase,
              private router: Router,
              private deduct : DeductBalanceUseCase,
              private setAmount : SetBalanceUseCase){
    /* this.transactionToCreate = {
      date : '',
    } */
    this.transactionForm = new FormGroup({
      date: new FormControl<Date | null>(null),
      type: new FormControl<string | null>(null, Validators.required),
      amount: new FormControl<number | null>(null, Validators.required),
      description: new FormControl<string | null>(null, Validators.required),
      userId: new FormControl<string | null>(null),
      categoryId: new FormControl<number | null>(null, Validators.required),
      bugetId: new FormControl<number | null>(null)
    });
  }


  create(){
    const dateActually = new Date (Date.now());

    this.transactionForm.get('userId')?.setValue(localStorage.getItem('uid'));
    this.transactionForm.get('date')?.setValue(dateActually.toJSON());
    this.transactionForm.get('categoryId')?.setValue(JSON.parse(this.transactionForm.get('categoryId')?.value));

    this.transactionCreate.execute(this.transactionForm.value).subscribe({
      next: transaction => {
        console.log(transaction),
        Swal.fire(
          'Created',
          'Transaction created successfully',
          'success'
        )
      },
      error:err => console.log(err),
      complete: () => {
        console.log('Complete');
        if(this.transactionForm.get('type')?.value == 'Deposit'){
          this.setAmountBalance(this.transactionForm.get('amount')?.value)
        };
        if(this.transactionForm.get('type')?.value == 'Withdrawal'){
          this.deductAmountBalance(this.transactionForm.get('amount')?.value)
        };
        this.router.navigate(["/home/activity/transaction/list"]);}
    });
    
  }


  setAmountBalance(value : number){
    this.setAmount.execute({balanceId:'643f6f43377ca7c4a290e670',value : value}).subscribe({
      next: result => console.log(result),
      error: err => console.log(err),
      complete: () => {console.log('Complete');}
    });
  }

  deductAmountBalance(value: number){
    this.deduct.execute({balanceId:'643f6f43377ca7c4a290e670',value : value}).subscribe({
      next: result => console.log(result),
      error: err => console.log(err),
      complete: () => {console.log('Complete');}
    });
  }


}
