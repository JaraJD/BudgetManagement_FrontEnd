import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserCreateModel } from 'src/domain/models/user-model/user-create.model';
import { UserModel } from 'src/domain/models/user-model/user.model';
import { CreateUserUseCase } from 'src/domain/usecases/user-usecase/create-user.usecase';
import { GetUserUseCase } from 'src/domain/usecases/user-usecase/get-user.usecase';

@Component({
  selector: 'BudgetApp-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  usuarioForm: FormGroup;
  usertocreate : UserCreateModel;

  constructor(private userCreate: CreateUserUseCase, private userGet : GetUserUseCase){
    this.usertocreate = {
      name: "",
      email: "",
      fireBaseId: "prueba2"
    }
    this.usuarioForm = new FormGroup({
      user: new FormControl<string>('', [Validators.required, Validators.minLength(1)]),
      email: new FormControl<string>('', [Validators.required, Validators.minLength(1)]),
      password: new FormControl<string>('', Validators.required)
    });
  }

  register(){
    console.log(this.usuarioForm.value)
    console.log(this.usuarioForm.get('user')?.value)
    console.log(this.usuarioForm.get('email')?.value)
    this.usertocreate.email = this.usuarioForm.get('email')?.value;
    this.usertocreate.name = this.usuarioForm.get('user')?.value;
    console.log(this.usertocreate)

    this.getUser(this.usuarioForm.get('user')?.value);

    this.userCreate.execute(this.usertocreate).subscribe({
      next: user => {
        console.log(user)
      },
      error: err => console.log(err),
      complete : () => {console.log('complete')}
    });


    //this.authService.SignUp(this.usuarioForm.get('correo')?.value, this.usuarioForm.get('contrasenia')?.value);
  }

  getUser(id: string){
    this.userGet.execute(id).subscribe((res) => console.log(res))
  }
}
