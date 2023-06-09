import { Component } from '@angular/core';
import { TransactionModel } from 'src/domain/models/activity-log-model/transaction-model/queries/transaction.model';
import { GetTransactionByUserUseCase } from 'src/domain/usecases/activity-log-usecase/transaction-usecase/queries/getUser-transaction.usecase';

@Component({
  selector: 'BudgetApp-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent {
  userId : string | null;

  transactions : TransactionModel[];


  constructor(private transactionGet : GetTransactionByUserUseCase){

    this.userId = localStorage.getItem('uid');
    this.transactions = new Array<TransactionModel>();
  }

  ngOnInit(): void {
    this.transactionGet.execute(this.userId).subscribe({
      next: transaction => (this.transactions = transaction, console.log(transaction))
    });
    
  }

}
