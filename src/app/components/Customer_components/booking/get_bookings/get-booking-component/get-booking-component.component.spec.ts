import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBookingComponentComponent } from './get-booking-component.component';

describe('GetBookingComponentComponent', () => {
  let component: GetBookingComponentComponent;
  let fixture: ComponentFixture<GetBookingComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetBookingComponentComponent]
    });
    fixture = TestBed.createComponent(GetBookingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
