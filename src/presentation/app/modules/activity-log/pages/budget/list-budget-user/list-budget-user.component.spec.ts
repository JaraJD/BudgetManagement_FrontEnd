import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBudgetUserComponent } from './list-budget-user.component';

describe('ListBudgetUserComponent', () => {
  let component: ListBudgetUserComponent;
  let fixture: ComponentFixture<ListBudgetUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBudgetUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBudgetUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
