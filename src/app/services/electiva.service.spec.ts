import { TestBed, inject } from '@angular/core/testing';

import { ElectivaService } from './electiva.service';

describe('ElectivaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElectivaService]
    });
  });

  it('should be created', inject([ElectivaService], (service: ElectivaService) => {
    expect(service).toBeTruthy();
  }));
});
