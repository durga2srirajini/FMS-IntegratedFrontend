import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGetAllPaymentsComponent } from './admin-get-all-payments.component';

describe('AdminGetAllPaymentsComponent', () => {
  let component: AdminGetAllPaymentsComponent;
  let fixture: ComponentFixture<AdminGetAllPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGetAllPaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGetAllPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
