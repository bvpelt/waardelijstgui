import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

import {Waardelijst} from '../model/waardelijst';
import {MessageService} from './message.service';
import {BaseService} from './base.service';

@Injectable({
    providedIn: 'root'
})
export class WaardelijstService extends BaseService {

    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(private http: HttpClient, messageService: MessageService) {
        super(messageService);
    }

    /** GET all waardelijsten from the server */
    getWaardelijsten(): Observable<Waardelijst[]> {
        return this.http.get<Waardelijst[]>(this.waardelijstenUrl)
            .pipe(
                tap(_ => this.logd('waardelijst', 'fetched waardelijsten')),
                catchError(this.handleError<Waardelijst[]>('getWaardelijsten', []))
            );
    }

    getWaardelijst(id: number): Observable<Waardelijst> {
        const url = `${this.waardelijstenUrl}/${id}`;

        return this.http.get<Waardelijst>(url).pipe(
            tap(_ => this.logd('waardelijst', `fetched waardelijst id=${id}`)),
            catchError(this.handleError<Waardelijst>(`getWaardelijst id=${id}`))
        );
    }

    /** GET waardelijst by id. Return `undefined` when id not found */
    getgetWaardelijstNo404<Data>(id: number): Observable<Waardelijst> {
        const url = `${this.waardelijstenUrl}/?id=${id}`;
        return this.http.get<Waardelijst[]>(url)
            .pipe(
                map(waardelijsten => waardelijsten[0]), // returns a {0|1} element array
                tap(h => {
                    const outcome = h ? 'fetched' : 'did not find';
                    this.logd('waardelijst', `${outcome} waardelijst id=${id}`);
                }),
                catchError(this.handleError<Waardelijst>(`getWaardelijst id=${id}`))
            );
    }

    /** PUT: update the hero on the server */
    updateWaardelijst(waardelijst: Waardelijst): Observable<any> {
        return this.http.put(this.waardelijstenUrl, waardelijst, this.httpOptions)
            .pipe(
                tap(_ => this.logd('waardelijst', `updated waardelijst id=${waardelijst.id}`)),
                catchError(this.handleError<any>('updateHero'))
            );
    }

    /** POST: add a new hero to the server */
    addWaardelijst(waardelijst: Waardelijst): Observable<Waardelijst> {
        return this.http.post<Waardelijst>(this.waardelijstenUrl, waardelijst, this.httpOptions)
            .pipe(
                tap((newWaardelijst: Waardelijst) => this.logd('waardelijst', `added waardelijst w/ id=${newWaardelijst.id}`)),
                catchError(this.handleError<Waardelijst>('addWaardelijst'))
            );
    }

    /** DELETE: delete the waardelijst from the server */
    deleteWaardelijst(waardelijst: Waardelijst | number): Observable<Waardelijst> {
        const id = typeof waardelijst === 'number' ? waardelijst : waardelijst.id;
        const url = `${this.waardelijstenUrl}/${id}`;

        return this.http.delete<Waardelijst>(url, this.httpOptions)
            .pipe(
                tap(_ => this.logd('waardelijst', `deleted waardelijst id=${id}`)),
                catchError(this.handleError<Waardelijst>('deleteWaardelijst'))
            );
    }

    /* GET waardelijsten whose name contains search term */
    searchWaardelijst(term: string): Observable<Waardelijst[]> {
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return of([]);
        }
        const url = `${this.waardelijstenUrl}/?name=${term}`;
        this.log('Search for term: ' + term + ' at url: ' + url);
        return this.http.get<Waardelijst[]>(url)
            .pipe(
                tap(_ => this.logd('waardelijst', `found waardelijsten matching "${term}"`)),
                catchError(this.handleError<Waardelijst[]>('searchWaardelijst', []))
            );
    }

}
