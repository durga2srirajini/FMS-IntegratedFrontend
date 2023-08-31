import { TestBed } from '@angular/core/testing';

import { ScheduleFlightService } from './schedule-flight.service';

describe('ScheduleFlightService', () => {
  let service: ScheduleFlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleFlightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
