import { Component, Input } from '@angular/core';
import { TargetSavingModel } from 'src/domain/models/financial-goal-model/target-saving-model/queries/target-saving.model';
import { GetTargetSavingByUserUseCase } from 'src/domain/usecases/financial-goal-usecase/target-saving-usecase/queries/getUser-target-saving.usecase';

@Component({
  selector: 'BudgetApp-list-financial',
  templateUrl: './list-financial.component.html',
  styleUrls: ['./list-financial.component.scss']
})
export class ListFinancialComponent {

  @Input() savings: TargetSavingModel[];

  constructor(){
    this.savings = [];
  }

}
