import { TestBed } from '@angular/core/testing';

import { NegateAuthGuard } from './negate-auth.guard';

describe('NegateAuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NegateAuthGuard = TestBed.get(NegateAuthGuard);
    expect(service).toBeTruthy();
  });
});
