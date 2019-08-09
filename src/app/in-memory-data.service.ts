import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Waardelijst} from './waardelijst';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const waardelijsten = [
            {id: 11, name: 'BAGAdresseerbaarObject'},
            {id: 12, name: 'BAGOpenbareRuimte'},
            {id: 13, name: 'BAGWoonplaats'},
            {id: 14, name: 'StatusHerverkavelingsproject'},
            {id: 15, name: 'StatusHistorie'},
            {id: 16, name: 'GegevenInOnderzoek'},
            {id: 17, name: 'NummerreserveringAppartementsrechtStatus'},
            {id: 18, name: 'NummerreserveringSplitsingStatus'},
            {id: 19, name: 'Koppelingswijze'},
            {id: 20, name: 'TypeGrens'}
        ];
        return {waardelijsten};
    }

    // Overrides the genId method to ensure that a hero always has an id.
    // If the heroes array is empty,
    // the method below returns the initial number (11).
    // if the heroes array is not empty, the method below returns the highest
    // hero id + 1.
    genId(waardelijsten: Waardelijst[]): number {
        return waardelijsten.length > 0 ? Math.max(...waardelijsten.map(waardelijst => waardelijst.id)) + 1 : 11;
    }
}
