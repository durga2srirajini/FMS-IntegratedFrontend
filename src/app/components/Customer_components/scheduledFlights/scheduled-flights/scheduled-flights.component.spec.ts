import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledFlightsComponent } from './scheduled-flights.component';

describe('ScheduledFlightsComponent', () => {
  let component: ScheduledFlightsComponent;
  let fixture: ComponentFixture<ScheduledFlightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduledFlightsComponent]
    });
    fixture = TestBed.createComponent(ScheduledFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
