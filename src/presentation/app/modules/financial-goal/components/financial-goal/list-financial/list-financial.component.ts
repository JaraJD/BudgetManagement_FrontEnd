import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TargetSavingModel } from 'src/domain/models/financial-goal-model/target-saving-model/queries/target-saving.model';
import { DeleteTargetSavingUseCase } from 'src/domain/usecases/financial-goal-usecase/target-saving-usecase/commands/delete-target.saving.usecase';
import { GetTargetSavingByUserUseCase } from 'src/domain/usecases/financial-goal-usecase/target-saving-usecase/queries/getUser-target-saving.usecase';
import Swal from 'sweetalert2';

@Component({
  selector: 'BudgetApp-list-financial',
  templateUrl: './list-financial.component.html',
  styleUrls: ['./list-financial.component.scss']
})
export class ListFinancialComponent {

  @Input() savings: TargetSavingModel[];

  constructor(private router: Router,
              private deleteSaving : DeleteTargetSavingUseCase){

    this.savings = [];
  }

  update(id: number, state : string){
    this.router.navigate(["/home/financialGoal/update/"+ id+"/"+state]);
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
        this.deleteSaving.execute(id).subscribe({
          next: result => {
            console.log(result),
            Swal.fire(
              'Removed',
              'The item has been removed',
              'success'
            )
          },
          error: err => console.log(err),
          complete: () => {console.log('Complete'), this.savings.splice(index, 1);}
        });
      }
    });
  }
}
