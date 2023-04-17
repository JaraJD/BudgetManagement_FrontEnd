import { Component } from '@angular/core';
import { TargetSavingModel } from 'src/domain/models/financial-goal-model/target-saving-model/queries/target-saving.model';
import { GetTargetSavingByUserUseCase } from 'src/domain/usecases/financial-goal-usecase/target-saving-usecase/queries/getUser-target-saving.usecase';

@Component({
  selector: 'BudgetApp-list-financial-user',
  templateUrl: './list-financial-user.component.html',
  styleUrls: ['./list-financial-user.component.scss']
})
export class ListFinancialUserComponent {

  userId : string | null;
  savings : TargetSavingModel[];

  constructor(private savingGet : GetTargetSavingByUserUseCase){
    this.userId = localStorage.getItem('uid');
    this.savings = [];
  }


  ngOnInit(): void {
    this.savingGet.execute(this.userId).subscribe({
      next: saving => (this.savings = saving, console.log(saving))
    });
  }

}
