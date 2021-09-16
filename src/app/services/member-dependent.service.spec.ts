import { TestBed } from '@angular/core/testing';

import { MemberDependentService } from './member-dependent.service';

describe('MemberDependentService', () => {
  let service: MemberDependentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberDependentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
