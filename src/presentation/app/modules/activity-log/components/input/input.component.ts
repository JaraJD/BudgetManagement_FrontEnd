import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'BudgetApp-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input()
  placeholder : string = '';

  @Output()
  onValue = new EventEmitter<string>()

  emitValue( value: string): void{
    this.onValue.emit(value);
  }
}
