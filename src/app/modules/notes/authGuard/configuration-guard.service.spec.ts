import { TestBed } from '@angular/core/testing';

import { ConfigurationGuardService } from './configuration-guard.service';

describe('ConfigurationGuardService', () => {
  let service: ConfigurationGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigurationGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
