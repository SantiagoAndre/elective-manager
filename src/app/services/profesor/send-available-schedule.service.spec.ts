import { TestBed } from '@angular/core/testing';

import { SendAvailableScheduleService } from './send-available-schedule.service';

describe('SendAvailableScheduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendAvailableScheduleService = TestBed.get(SendAvailableScheduleService);
    expect(service).toBeTruthy();
  });
});
