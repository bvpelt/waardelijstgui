import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

import {Waardelijst} from '../model/waardelijst';
import {MessageService} from './message.service';

@Injectable({
    providedIn: 'root'
})
export class WaardelijstService {

    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    //private waardelijstUrl = 'api/waardelijsten';  // URL to web api
    private waardelijstUrl = 'http://localhost:8080/waardelijsten';

    constructor(private http: HttpClient, private messageService: MessageService) {
    }

    /** GET heroes from the server */
    getWaardelijsten(): Observable<Waardelijst[]> {
        return this.http.get<Waardelijst[]>(this.waardelijstUrl)
            .pipe(
                tap(_ => this.log('fetched waardelijsten')),
                catchError(this.handleError<Waardelijst[]>('getWaardelijsten', []))
            );
    }

    getWaardelijst(id: number): Observable<Waardelijst> {
        const url = `${this.waardelijstUrl}/${id}`;

        return this.http.get<Waardelijst>(url).pipe(
            tap(_ => this.log(`fetched waardelijst id=${id}`)),
            catchError(this.handleError<Waardelijst>(`getWaardelijst id=${id}`))
        );
    }

    /** GET waardelijst by id. Return `undefined` when id not found */
    getgetWaardelijstNo404<Data>(id: number): Observable<Waardelijst> {
        const url = `${this.waardelijstUrl}/?id=${id}`;
        return this.http.get<Waardelijst[]>(url)
            .pipe(
                map(waardelijsten => waardelijsten[0]), // returns a {0|1} element array
                tap(h => {
                    const outcome = h ? `fetched` : `did not find`;
                    this.log(`${outcome} waardelijst id=${id}`);
                }),
                catchError(this.handleError<Waardelijst>(`getWaardelijst id=${id}`))
            );
    }

    /** PUT: update the hero on the server */
    updateWaardelijst(waardelijst: Waardelijst): Observable<any> {
        return this.http.put(this.waardelijstUrl, waardelijst, this.httpOptions)
            .pipe(
                tap(_ => this.log(`updated waardelijst id=${waardelijst.id}`)),
                catchError(this.handleError<any>('updateHero'))
            );
    }

    /** POST: add a new hero to the server */
    addWaardelijst(waardelijst: Waardelijst): Observable<Waardelijst> {
        return this.http.post<Waardelijst>(this.waardelijstUrl, waardelijst, this.httpOptions)
            .pipe(
                tap((newWaardelijst: Waardelijst) => this.log(`added waardelijst w/ id=${newWaardelijst.id}`)),
                catchError(this.handleError<Waardelijst>('addWaardelijst'))
            );
    }

    /** DELETE: delete the waardelijst from the server */
    deleteWaardelijst(waardelijst: Waardelijst | number): Observable<Waardelijst> {
        const id = typeof waardelijst === 'number' ? waardelijst : waardelijst.id;
        const url = `${this.waardelijstUrl}/${id}`;

        return this.http.delete<Waardelijst>(url, this.httpOptions)
            .pipe(
                tap(_ => this.log(`deleted waardelijst id=${id}`)),
                catchError(this.handleError<Waardelijst>('deleteWaardelijst'))
            );
    }

    /* GET waardelijsten whose name contains search term */
    searchWaardelijst(term: string): Observable<Waardelijst[]> {
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return of([]);
        }
        return this.http.get<Waardelijst[]>(`${this.waardelijstUrl}/?name=${term}`)
            .pipe(
                tap(_ => this.log(`found waardelijsten matching "${term}"`)),
                catchError(this.handleError<Waardelijst[]>('searchWaardelijst', []))
            );
    }

    /** Log a WaardelijstService message with the MessageService */
    private log(message: string) {
        this.messageService.add(`WaardelijstService: ${message}`);
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

}
