import { Component } from '@angular/core';
import { TransactionModel } from 'src/domain/models/activity-log-model/transaction-model/queries/transaction.model';
import { GetTransactionByCategoryUseCase } from 'src/domain/usecases/activity-log-usecase/transaction-usecase/queries/getCategory-transaction.usecase';
import { GetTransactionByDateUseCase } from 'src/domain/usecases/activity-log-usecase/transaction-usecase/queries/getDate-transaction.usecase';
import { GetTransactionByTypeUseCase } from 'src/domain/usecases/activity-log-usecase/transaction-usecase/queries/getType-transaction.usecase';
import { GetTransactionByUserUseCase } from 'src/domain/usecases/activity-log-usecase/transaction-usecase/queries/getUser-transaction.usecase';

@Component({
  selector: 'BudgetApp-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent {

  transactions : TransactionModel[];

  constructor(private transactionGet : GetTransactionByUserUseCase,
              private transactionType : GetTransactionByTypeUseCase,
              private transactionCategory: GetTransactionByCategoryUseCase,
              private transactionDate : GetTransactionByDateUseCase){

    this.transactions = new Array<TransactionModel>();
  }


  create(){
    
  }

  getCategory(){
    this.transactionCategory.execute( {user : 'user1', category : 2}).subscribe( result => console.log(result));
  }

  getType(){
    this.transactionType.execute({user : 'user1', type : 'Gasto'}).subscribe( result => console.log(result));
  }

  getDate(){
    this.transactionDate.execute({user : 'user1', date : "2023-04-01"}).subscribe( result => console.log(result));
    console.log({user : 'user1', date : "2023-04-01"})
  }
}
