import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSchedulesComponent } from './flight-schedules.component';

describe('FlightSchedulesComponent', () => {
  let component: FlightSchedulesComponent;
  let fixture: ComponentFixture<FlightSchedulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightSchedulesComponent]
    });
    fixture = TestBed.createComponent(FlightSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
