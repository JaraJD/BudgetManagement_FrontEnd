import { Component } from '@angular/core';
import { BudgetModel } from 'src/domain/models/activity-log-model/budget-model/queries/budget.model';
import { GetBudgetByUserUseCase } from 'src/domain/usecases/activity-log-usecase/budget-usecase/queries/getUser-budget.usecase';

@Component({
  selector: 'BudgetApp-list-budget-user',
  templateUrl: './list-budget-user.component.html',
  styleUrls: ['./list-budget-user.component.scss']
})
export class ListBudgetUserComponent {
  userId : string | null;
  budgets : BudgetModel[];

  constructor(private budgetGet : GetBudgetByUserUseCase){
    this.userId = localStorage.getItem('uid');
    this.budgets = [];
  }

  ngOnInit(): void {
    this.budgetGet.execute(this.userId).subscribe({
      next: budget => (this.budgets = budget, console.log(budget))
    });
  }
}
