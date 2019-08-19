import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

import {Waardelijst} from '../model/waardelijst';
import {MessageService} from './message.service';
import {BaseService} from './base.service';
import {WaardelijstEntry} from '../model/waardelijstentry';

@Injectable({
    providedIn: 'root'
})
export class WaardelijstentriesService extends BaseService {

    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(private http: HttpClient, messageService: MessageService) {
        super(messageService);
    }

    /** GET all waardelijstentries from the server */
    getWaardelijstentries(waardelijst: Waardelijst): Observable<WaardelijstEntry[]> {
        const waardelijstnaam = waardelijst.name;
        const url = `${this.waardelijstUrl}/${waardelijstnaam}`;

        this.logd("WaardelijstentriesService","WaardelijstentriesService, get url: " + url);
        return this.http.get<WaardelijstEntry[]>(url)
            .pipe(
                tap(_ => this.logd('waardelijstentrie', 'fetched waardelijstentries')),
                catchError(this.handleError<WaardelijstEntry[]>('getWaardelijstentries', []))
            );
    }
}
