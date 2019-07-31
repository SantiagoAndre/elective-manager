import { TestBed, async, inject } from '@angular/core/testing';

import { SessionupGuard } from './sessionup.guard';

describe('SessionupGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionupGuard]
    });
  });

  it('should ...', inject([SessionupGuard], (guard: SessionupGuard) => {
    expect(guard).toBeTruthy();
  }));
});
