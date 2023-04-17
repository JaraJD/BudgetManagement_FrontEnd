import { Component, Input } from '@angular/core';
import { BudgetModel } from 'src/domain/models/activity-log-model/budget-model/queries/budget.model';
import { GetBudgetExpenseByIdUseCase } from 'src/domain/usecases/activity-log-usecase/budget-expense-usecase/queries/get-budget-expense.usecase'
@Component({
  selector: 'BudgetApp-list-budget',
  templateUrl: './list-budget.component.html',
  styleUrls: ['./list-budget.component.scss']
})
export class ListBudgetComponent {

  @Input() budgets: BudgetModel[];

  constructor(){
    this.budgets = [];
  } 

}
