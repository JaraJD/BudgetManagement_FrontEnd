import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TransactionModel } from 'src/domain/models/activity-log-model/transaction-model/queries/transaction.model';
import { GetTransactionByTypeUseCase } from 'src/domain/usecases/activity-log-usecase/transaction-usecase/queries/getType-transaction.usecase';

@Component({
  selector: 'BudgetApp-list-type',
  templateUrl: './list-type.component.html',
  styleUrls: ['./list-type.component.scss']
})
export class ListTypeComponent {

  userId : string | null;

  transactionForm: FormGroup;

  transactions : TransactionModel[];

  constructor(private transactionGet : GetTransactionByTypeUseCase){
    this.userId = localStorage.getItem('uid');
    this.transactions = new Array<TransactionModel>();
    this.transactionForm = new FormGroup({
      type: new FormControl<string | null>(null, Validators.required),
    });
  }


  search(){
    console.log(this.transactionForm.get('type')?.value);
    this.transactionGet.execute({user : this.userId, type : this.transactionForm.get('type')?.value}).subscribe({
      next: transaction => (this.transactions = transaction, console.log(transaction))
    });
  }

  

}
