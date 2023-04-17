import { Component, Input } from '@angular/core';
import { TransactionModel } from 'src/domain/models/activity-log-model/transaction-model/queries/transaction.model';
import { UserModel } from 'src/domain/models/user-model/user.model';

@Component({
  selector: 'BudgetApp-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() transactions: TransactionModel[];

  constructor(){
    this.transactions = new Array<TransactionModel>();
  } 

  capture(transaction: TransactionModel){
    console.log(transaction);
  }
}
