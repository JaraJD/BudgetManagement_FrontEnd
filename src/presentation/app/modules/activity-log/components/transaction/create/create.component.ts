import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'BudgetApp-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  tareaForm: FormGroup;

  constructor(){
    this.tareaForm = new FormGroup({
      dia: new FormControl<number | null>(null, [Validators.required, Validators.minLength(1)]),
      title: new FormControl<string | null>(null, Validators.required),
      description: new FormControl<string | null>(null, Validators.required),
      responsible: new FormControl<string | null>(null, Validators.required),
      priority: new FormControl<string | null>(null, Validators.required),
      isCompleted: new FormControl<boolean | null>(false, Validators.required),
      uidUser: new FormControl<string | null>(null)
    });
  }

  create(){
    
  }

}
