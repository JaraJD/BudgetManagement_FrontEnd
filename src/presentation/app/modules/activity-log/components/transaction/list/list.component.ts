import { Component, Input } from '@angular/core';
import { TransactionModel } from 'src/domain/models/activity-log-model/transaction-model/queries/transaction.model';
import { DeleteTransactionUseCase } from 'src/domain/usecases/activity-log-usecase/transaction-usecase/commands/delete-transaction.usecase';
import Swal from 'sweetalert2';

@Component({
  selector: 'BudgetApp-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() transactions: TransactionModel[];

  constructor(private deleteTransaction : DeleteTransactionUseCase){
    this.transactions = new Array<TransactionModel>();
  } 

  capture(transaction: TransactionModel){
    console.log(transaction);
  }


  delete(id : number, index : number){
    console.log(id, index);
    Swal.fire({
      title: 'Delete Item',
      text: "Do you want to delete the item?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete'
    }).then((result) => {
      if(result.isConfirmed){
        this.deleteTransaction.execute(id).subscribe({
          next: result => {
            console.log(result),
            Swal.fire(
              'Removed',
              'The item has been removed',
              'success'
            )
          },
          error: err => console.log(err),
          complete: () => {console.log('Complete'), this.transactions.splice(index, 1);}
        });
      }
    });
  }
}
