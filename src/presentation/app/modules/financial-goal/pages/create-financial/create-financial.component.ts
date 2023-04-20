import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateTargetSavingModel } from 'src/domain/models/financial-goal-model/target-saving-model/commands/update-target-saving.model';
import { CreateTargetSavingUseCase } from 'src/domain/usecases/financial-goal-usecase/target-saving-usecase/commands/create-target-saving.usecase';
import { UpdateTargetSavingUseCase } from 'src/domain/usecases/financial-goal-usecase/target-saving-usecase/commands/update-target-saving.usecase';
import Swal from 'sweetalert2';

@Component({
  selector: 'BudgetApp-create-financial',
  templateUrl: './create-financial.component.html',
  styleUrls: ['./create-financial.component.scss']
})
export class CreateFinancialComponent {

  savingForm: FormGroup;
  
  dates : string = ''
  createMode : boolean;
  id : string = '';
  savingToUpdate : UpdateTargetSavingModel;

  constructor(private savingCreate : CreateTargetSavingUseCase,
              private savingUpdate : UpdateTargetSavingUseCase,
              private router: Router,
              private routeActive: ActivatedRoute){
  
    this.savingToUpdate = {
      id : 0,
      startDate : '',
      endDate : '',
      targetAmount : 0
    }
    this.createMode = true;
    this.savingForm = new FormGroup({
      idUser: new FormControl<string | null>(null),
      startDate: new FormControl<Date | null>(null, Validators.required),
      endDate: new FormControl<Date | null>(null, Validators.required),
      targetAmount: new FormControl<number | null>(null, Validators.required),
    });
  }

  ngOnInit(): void {
    if(this.routeActive.snapshot.params['id']){
      this.createMode = false;
      this.id = this.routeActive.snapshot.params['id'];
    }
    else{
      this.createMode = true;
    }
    
    console.log(this.id)
}

  create(){
    this.savingForm.get('idUser')?.setValue(localStorage.getItem('uid'));
    console.log(this.savingForm.value);

    this.savingCreate.execute(this.savingForm.value).subscribe({
      next: budget => {
        console.log(budget),
        Swal.fire(
          'Created',
          'Target Saving created successfully',
          'success'
        )
      },
      error:err => console.log(err),
      complete: () => {console.log('Complete'), this.router.navigate(["/home/financialGoal/list"]);}
    });

  }


  update(){
    this.savingToUpdate = {
      id : parseInt(this.id),
      startDate : this.savingForm.get('startDate')?.value,
      endDate : this.savingForm.get('endDate')?.value,
      targetAmount : this.savingForm.get('targetAmount')?.value
    }
    console.log(this.savingToUpdate);
    this.savingUpdate.execute(this.savingToUpdate).subscribe({
      next: result => {
        console.log(result),
        Swal.fire(
          'Updated',
          'Saving Update successfully',
          'success'
        )
      },
      error:err => console.log(err),
      complete: () => {console.log('Complete'), this.router.navigate(["/home/financialGoal/list"]);}
    });
  }


}
