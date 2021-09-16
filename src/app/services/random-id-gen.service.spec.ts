import { TestBed } from '@angular/core/testing';

import { RandomIdGenService } from './random-id-gen.service';

describe('RandomIdGenService', () => {
  let service: RandomIdGenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomIdGenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
