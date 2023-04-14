import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BudgetComponent } from "./pages/budget/budget.component";
import { TransactionComponent } from "./pages/transaction/transaction.component";
import { ActivityMainComponent } from "./pages/activity-main/activity-main.component";
import { HistoryComponent } from "./pages/history/history.component";

const routes: Routes = [
  {
    path : '',
    component : ActivityMainComponent,
    children: [
      {
        path: 'budget',
        component: BudgetComponent
      },
      {
        path: 'transaction',
        component: TransactionComponent
      },
      {
        path: 'history',
        component: HistoryComponent
      },
      {
        path: '**',
        redirectTo: 'budget'
      }
    ]
  }
]

@NgModule({
    imports: [RouterModule.forChild( routes )],
    exports: [RouterModule]
  })
  export class ActivityLogRoutingModule { }