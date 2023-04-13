import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';

import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo
} from '@angular/fire/compat/auth-guard'

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['security']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);


const routes: Routes = [
      {
        path: '',
        component: IndexComponent
      },
      {
        path: 'security', // localhost:4200/security
        loadChildren: () =>
          import('../security/security.module').then(
            (m) => m.SecurityModule
        ),
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectLoggedInToHome}
      },
      {
        path: 'home', // localhost:4200/home
        loadChildren: () =>
          import('../home/home.module').then(
            (m) => m.HomeModule
        ),
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin}
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
