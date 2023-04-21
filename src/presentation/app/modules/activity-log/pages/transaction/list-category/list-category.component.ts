import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TransactionModel } from 'src/domain/models/activity-log-model/transaction-model/queries/transaction.model';
import { GetTransactionByCategoryUseCase } from 'src/domain/usecases/activity-log-usecase/transaction-usecase/queries/getCategory-transaction.usecase';

@Component({
  selector: 'BudgetApp-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent {
  userId : string | null;

  transactions : TransactionModel[];

  transactionForm: FormGroup;

  idCategory: number = 0

  constructor(private transactionGet : GetTransactionByCategoryUseCase){
    this.userId = localStorage.getItem('uid');
    this.transactions = new Array<TransactionModel>();
    this.transactionForm = new FormGroup({
      category: new FormControl<number | null>(null, Validators.required),
    });
  }


  search(){
    this.transactionForm.get('category')?.setValue(JSON.parse(this.transactionForm.get('category')?.value));
    this.transactionGet.execute({user : this.userId, category : this.transactionForm.get('category')?.value}).subscribe({
      next: transaction => (this.transactions = transaction, console.log(transaction))
    });
  }


}
