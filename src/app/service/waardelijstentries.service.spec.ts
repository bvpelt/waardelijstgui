import {TestBed} from '@angular/core/testing';

import {WaardelijstService} from './waardelijst.service';
import {WaardelijstentriesService} from './waardelijstentries.service';

describe('WaardelijstentriesService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: WaardelijstentriesService = TestBed.get(WaardelijstentriesService);
        expect(service).toBeTruthy();
    });
});
