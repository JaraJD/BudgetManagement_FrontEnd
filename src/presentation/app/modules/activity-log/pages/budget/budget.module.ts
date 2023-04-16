import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBudgetUserComponent } from './list-budget-user/list-budget-user.component';
import { CreateBudgetComponent } from './create-budget/create-budget.component';
import { BudgetRoutingModule } from './budget-routing.module';
import { ListBudgetComponent } from '../../components/Budget/list-budget/list-budget.component';



@NgModule({
  declarations: [
    ListBudgetUserComponent,
    CreateBudgetComponent,
    ListBudgetComponent
  ],
  imports: [
    CommonModule,
    BudgetRoutingModule
  ]
})
export class BudgetModule { }
