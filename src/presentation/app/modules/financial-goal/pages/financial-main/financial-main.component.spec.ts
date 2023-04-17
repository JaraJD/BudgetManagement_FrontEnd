import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialMainComponent } from './financial-main.component';

describe('FinancialMainComponent', () => {
  let component: FinancialMainComponent;
  let fixture: ComponentFixture<FinancialMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
