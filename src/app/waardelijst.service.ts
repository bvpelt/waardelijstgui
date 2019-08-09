import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {Waardelijst} from './waardelijst';
import {WAARDELIJSTEN} from './mock-waardelijsten';
import {MessageService} from './message.service';

@Injectable({
    providedIn: 'root'
})
export class WaardelijstService {

    constructor(private messageService: MessageService) {
    }

    getWaardelijsten(): Observable<Waardelijst[]> {
        this.messageService.add('WaardelijstService: fetched waardelijsten');
        return of(WAARDELIJSTEN);
    }

    getWaardelijst(id: number): Observable<Waardelijst> {
        // TODO: send the message _after_ fetching the hero
        this.messageService.add(`HeroService: fetched waardelijst id=${id}`);
        return of(WAARDELIJSTEN.find(waardelijst => waardelijst.id === id));
    }
}
