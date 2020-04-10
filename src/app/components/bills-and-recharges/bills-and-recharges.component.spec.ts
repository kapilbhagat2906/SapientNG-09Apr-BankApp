import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsAndRechargesComponent } from './bills-and-recharges.component';

describe('BillsAndRechargesComponent', () => {
  let component: BillsAndRechargesComponent;
  let fixture: ComponentFixture<BillsAndRechargesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillsAndRechargesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillsAndRechargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
