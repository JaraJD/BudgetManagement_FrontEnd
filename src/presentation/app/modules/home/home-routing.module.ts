import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainHomeComponent } from "./pages/main-home/main-home.component";
import { CreateBalanceComponent } from "./pages/user/balance/create-balance/create-balance.component";

const routes: Routes = [
  {
    path : '',
    component : MainHomeComponent,
    children: [
      {
        path : 'createBalance',
        component : CreateBalanceComponent,
      },
      {
        path: 'activity', // localhost:4200/home/activity
        loadChildren: () =>
          import('../activity-log/activity-log.module').then(
            (m) => m.ActivityLogModule
        )
      },
      {
        path: 'financialGoal', // localhost:4200/home/financialGoal
        loadChildren: () =>
          import('../financial-goal/financial-goal.module').then(
            (m) => m.FinancialGoalModule
        )
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
]

@NgModule({
    imports: [RouterModule.forChild( routes )],
    exports: [RouterModule]
  })
  export class HomeRoutingModule { }