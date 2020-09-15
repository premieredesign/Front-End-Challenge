import { TestBed } from '@angular/core/testing';

import { ClientEnrolleeService } from './client-enrollee.service';

describe('ClientEnrolleeService', () => {
  let service: ClientEnrolleeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientEnrolleeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
