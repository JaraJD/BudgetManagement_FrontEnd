import { Component } from '@angular/core';
import { TransactionModel } from 'src/domain/models/activity-log-model/transaction-model/queries/transaction.model';
import { GetTransactionByUserUseCase } from 'src/domain/usecases/activity-log-usecase/transaction-usecase/queries/getUser-transaction.usecase';

@Component({
  selector: 'BudgetApp-update-transaction',
  templateUrl: './update-transaction.component.html',
  styleUrls: ['./update-transaction.component.scss']
})
export class UpdateTransactionComponent {
  userId : string | null;

  transactions : TransactionModel[];
  
  state : boolean;

  constructor(private transactionGet : GetTransactionByUserUseCase){
    this.state = true;
    this.userId = localStorage.getItem('uid');
    this.transactions = new Array<TransactionModel>();
  }

  ngOnInit(): void {
    this.transactionGet.execute(this.userId).subscribe({
      next: transaction => (this.transactions = transaction, console.log(transaction))
    });
    
  }
  
}
