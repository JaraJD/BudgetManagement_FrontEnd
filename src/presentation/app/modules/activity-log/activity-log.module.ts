import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetComponent } from './pages/budget/budget.component';
import { TransactionComponent } from './pages/transaction/transaction-main/transaction.component';
import { ActivityLogRoutingModule } from './activity-log-routing.module';
import { ActivityMainComponent } from './pages/activity-main/activity-main.component';
import { HistoryComponent } from './pages/history/history.component';
import { ListComponent } from './components/transaction/list/list.component';
import { FormatDatePipe } from './pipes/format-date/format-date.pipe';
import { ListUserComponent } from './pages/transaction/list-user/list-user.component';
import { CreateComponent } from './pages/transaction/create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionModule } from './pages/transaction/transaction.module';



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
    ActivityLogRoutingModule
  ]
})
export class ActivityLogModule { }
