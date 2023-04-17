import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFinancialUserComponent } from './list-financial-user.component';

describe('ListFinancialUserComponent', () => {
  let component: ListFinancialUserComponent;
  let fixture: ComponentFixture<ListFinancialUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFinancialUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFinancialUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
