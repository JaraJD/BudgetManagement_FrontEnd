import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'BudgetApp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  usuarioForm: FormGroup;

  constructor(){
    this.usuarioForm = new FormGroup({
      correo: new FormControl<string>('', [Validators.required, Validators.minLength(1)]),
      contrasenia: new FormControl<string>('', Validators.required)
    });
  }

  entrar(){
    console.log(this.usuarioForm.value);
    console.log(this.usuarioForm.get('correo')?.value)
    console.log(this.usuarioForm.get('contrasenia')?.value)
    //this.authService.SignIn(this.usuarioForm.get('correo')?.value, this.usuarioForm.get('contrasenia')?.value); 
  }

  auth(): void{
    /* this.authService.GoogleAuth(); */
  }
}
