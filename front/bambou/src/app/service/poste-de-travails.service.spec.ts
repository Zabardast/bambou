import { TestBed } from '@angular/core/testing';

import { PosteDeTravailsService } from './poste-de-travails.service';

describe('PosteDeTravailsService', () => {
  let service: PosteDeTravailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosteDeTravailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
