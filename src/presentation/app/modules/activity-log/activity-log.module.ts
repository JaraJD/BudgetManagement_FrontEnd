import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetComponent } from './pages/budget/budget.component';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { ActivityLogRoutingModule } from './activity-log-routing.module';
import { ActivityMainComponent } from './pages/activity-main/activity-main.component';
import { HistoryComponent } from './pages/history/history.component';
import { ListComponent } from './components/list/list.component';
import { FormatDatePipe } from './pipes/format-date/format-date.pipe';



@NgModule({
  declarations: [
    BudgetComponent,
    TransactionComponent,
    ActivityMainComponent,
    HistoryComponent,
    ListComponent,
    FormatDatePipe
  ],
  imports: [
    CommonModule,
    ActivityLogRoutingModule
  ]
})
export class ActivityLogModule { }
