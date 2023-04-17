import { Component } from '@angular/core';
import { TransactionModel } from 'src/domain/models/activity-log-model/transaction-model/queries/transaction.model';
import { GetTransactionByDateUseCase } from 'src/domain/usecases/activity-log-usecase/transaction-usecase/queries/getDate-transaction.usecase';

@Component({
  selector: 'BudgetApp-list-date',
  templateUrl: './list-date.component.html',
  styleUrls: ['./list-date.component.scss']
})
export class ListDateComponent {
  userId : string | null;

  transactions : TransactionModel[];

  constructor(private transactionGet : GetTransactionByDateUseCase){
    this.userId = localStorage.getItem('uid');
    this.transactions = new Array<TransactionModel>();
  }

  ngOnInit(): void {
    this.transactionGet.execute({user : this.userId, date : "2023-04-17"}).subscribe({
      next: transaction => (this.transactions = transaction, console.log(transaction))
    });
    
  }

}
