import { TestBed } from '@angular/core/testing';

import { SpedizioniService } from './spedizioni.service';

describe('SpedizioniService', () => {
  let service: SpedizioniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpedizioniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
