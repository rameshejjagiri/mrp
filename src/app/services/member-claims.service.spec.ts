import { TestBed } from '@angular/core/testing';

import { MemberClaimsService } from './member-claims.service';

describe('MemberClaimsService', () => {
  let service: MemberClaimsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberClaimsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
