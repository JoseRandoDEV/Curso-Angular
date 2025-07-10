import { TestBed } from '@angular/core/testing';

import { Tarjeta } from './tarjeta';

describe('Tarjeta', () => {
  let service: Tarjeta;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tarjeta);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
