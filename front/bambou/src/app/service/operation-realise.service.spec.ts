import { TestBed } from '@angular/core/testing';

import { OperationRealiseService } from './operation-realise.service';

describe('OperationRealiseService', () => {
  let service: OperationRealiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperationRealiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
