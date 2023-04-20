import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBudgetUserComponent } from './list-budget-user/list-budget-user.component';
import { CreateBudgetComponent } from './create-budget/create-budget.component';
import { BudgetRoutingModule } from './budget-routing.module';
import { ListBudgetComponent } from '../../components/Budget/list-budget/list-budget.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormatDateMonthPipe } from '../../pipes/format-date-month/format-date-month.pipe';
import { CreateBudgetExpenseComponent } from './create-budget-expense/create-budget-expense.component';



@NgModule({
  declarations: [
    ListBudgetUserComponent,
    CreateBudgetComponent,
    ListBudgetComponent,
    FormatDateMonthPipe,
    CreateBudgetExpenseComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BudgetRoutingModule
  ]
})
export class BudgetModule { }
