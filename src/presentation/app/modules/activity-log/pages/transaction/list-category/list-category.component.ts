import { Component } from '@angular/core';
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


  constructor(private transactionGet : GetTransactionByCategoryUseCase){
    this.userId = localStorage.getItem('uid');
    this.transactions = new Array<TransactionModel>();
  }

  ngOnInit(): void {
    this.transactionGet.execute({user : this.userId, category : 10}).subscribe({
      next: transaction => (this.transactions = transaction, console.log(transaction))
    });
    
  }



}
