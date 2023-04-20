import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBudgetExpenseComponent } from './create-budget-expense.component';

describe('CreateBudgetExpenseComponent', () => {
  let component: CreateBudgetExpenseComponent;
  let fixture: ComponentFixture<CreateBudgetExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBudgetExpenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBudgetExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
