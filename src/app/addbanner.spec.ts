import { TestBed } from '@angular/core/testing';

import { Addbanner } from './addbanner';

describe('Addbanner', () => {
  let service: Addbanner;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Addbanner);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
