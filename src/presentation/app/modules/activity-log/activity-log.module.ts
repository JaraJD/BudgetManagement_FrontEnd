import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetComponent } from './pages/budget/budget-main/budget.component';
import { TransactionComponent } from './pages/transaction/transaction-main/transaction.component';
import { ActivityLogRoutingModule } from './activity-log-routing.module';
import { ActivityMainComponent } from './pages/activity-main/activity-main.component';
import { HistoryComponent } from './pages/history/history.component';
import { TransactionModule } from './pages/transaction/transaction.module';
import { BudgetModule } from './pages/budget/budget.module';



@NgModule({
  declarations: [
    BudgetComponent,
    TransactionComponent,
    ActivityMainComponent,
    HistoryComponent,
    
  ],
  imports: [
    CommonModule,
    TransactionModule,
    BudgetModule,
    ActivityLogRoutingModule
  ]
})
export class ActivityLogModule { }
