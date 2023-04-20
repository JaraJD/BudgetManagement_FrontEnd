import { NgModule } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { BudgetComponent } from './pages/budget/budget-main/budget.component';
import { TransactionComponent } from './pages/transaction/transaction-main/transaction.component';
import { ActivityLogRoutingModule } from './activity-log-routing.module';
import { ActivityMainComponent } from './pages/activity-main/activity-main.component';



@NgModule({
  declarations: [
    BudgetComponent,
    TransactionComponent,
    ActivityMainComponent,
  ],
  imports: [
    CommonModule,
    ActivityLogRoutingModule
  ]
})
export class ActivityLogModule { }
