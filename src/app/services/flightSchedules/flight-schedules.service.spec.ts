import { TestBed } from '@angular/core/testing';

import { FlightSchedulesService } from './flight-schedules.service';

describe('FlightSchedulesService', () => {
  let service: FlightSchedulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightSchedulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
