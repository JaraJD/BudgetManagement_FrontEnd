import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BudgetComponent } from "./pages/budget/budget-main/budget.component";
import { TransactionComponent } from "./pages/transaction/transaction-main/transaction.component";
import { ActivityMainComponent } from "./pages/activity-main/activity-main.component";
import { HistoryComponent } from "./pages/history/history.component";

const routes: Routes = [
  {
    path : '',
    component : ActivityMainComponent,
    children: [
      {
        path: 'budget', // localhost:4200/home/activity/budget
        loadChildren: () =>
          import('../activity-log/pages/budget/budget.module').then(
            (m) => m.BudgetModule
        )
      },
      {
        path: 'transaction', // localhost:4200/home/activity/transaction
        loadChildren: () =>
          import('../activity-log/pages/transaction/transaction.module').then(
            (m) => m.TransactionModule
        )
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