import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancialMainComponent } from './pages/financial-main/financial-main.component';
import { CreateFinancialComponent } from './pages/create-financial/create-financial.component';
import { ListFinancialUserComponent } from './pages/list-financial-user/list-financial-user.component';
import { ListFinancialComponent } from './components/financial-goal/list-financial/list-financial.component';
import { FormatDatePipe } from '../activity-log/pipes/format-date/format-date.pipe';
import { FinancialGoalRoutingModule } from './financial-goal-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateFormatPipe } from './pipes/date-format.pipe';



@NgModule({
  declarations: [
    FinancialMainComponent,
    CreateFinancialComponent,
    ListFinancialUserComponent,
    ListFinancialComponent,
    DateFormatPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FinancialGoalRoutingModule
  ]
})
export class FinancialGoalModule { }
