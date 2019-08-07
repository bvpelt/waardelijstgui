import {TestBed} from '@angular/core/testing';

import {WaardelijstService} from './waardelijst.service';

describe('WaardelijstService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WaardelijstService = TestBed.get(WaardelijstService);
    expect(service).toBeTruthy();
  });
});
