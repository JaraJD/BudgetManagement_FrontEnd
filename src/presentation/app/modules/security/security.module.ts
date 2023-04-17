import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSecurityComponent } from './pages/main-security/main-security.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SecurityRoutingModule } from './security-routing.module';



@NgModule({
  declarations: [
    MainSecurityComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SecurityRoutingModule
  ]
})
export class SecurityModule { }
