import { Component } from '@angular/core';
import { TransactionModel } from 'src/domain/models/activity-log-model/transaction-model/queries/transaction.model';
import { GetTransactionByTypeUseCase } from 'src/domain/usecases/activity-log-usecase/transaction-usecase/queries/getType-transaction.usecase';

@Component({
  selector: 'BudgetApp-list-type',
  templateUrl: './list-type.component.html',
  styleUrls: ['./list-type.component.scss']
})
export class ListTypeComponent {

  userId : string | null;

  transactions : TransactionModel[];

  constructor(private transactionGet : GetTransactionByTypeUseCase){
    this.userId = localStorage.getItem('uid');
    this.transactions = new Array<TransactionModel>();
  }

  ngOnInit(): void {
    this.transactionGet.execute({user : this.userId, type : 'Withdrawal'}).subscribe({
      next: transaction => (this.transactions = transaction, console.log(transaction))
    });
    
  }


}
