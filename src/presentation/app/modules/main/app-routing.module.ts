import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
      {
        path: '',
        component: IndexComponent
      },
      {
        path: 'security', // localhost:4200/tareas
        loadChildren: () =>
          import('../security/security.module').then(
            (m) => m.SecurityModule
        )
      },
      {
        path: 'home', // localhost:4200/home
        loadChildren: () =>
          import('../home/home.module').then(
            (m) => m.HomeModule
        )
      },
      {
        path: '**',
        redirectTo: ''
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
