import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { inboxGuard } from './inbox.guard';

describe('inboxGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => inboxGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
