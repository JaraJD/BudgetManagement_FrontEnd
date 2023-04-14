import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainHomeComponent } from "./pages/main-home/main-home.component";

const routes: Routes = [
  {
    path : '',
    component : MainHomeComponent,
    children: [
      {
        path: 'activity', // localhost:4200/home/security
        loadChildren: () =>
          import('../activity-log/activity-log.module').then(
            (m) => m.ActivityLogModule
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