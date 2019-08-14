import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment';
import {User} from '../model/user';
import {Observable} from 'rxjs';
import {BaseService} from './base.service';
import {catchError, tap} from 'rxjs/operators';
import {MessageService} from './message.service';
import {nullSafeIsEquivalent} from '@angular/compiler/src/output/output_ast';

@Injectable({
    providedIn: 'root'
})
export class UserService extends BaseService {

    constructor(private http: HttpClient, messageService: MessageService) {
        super(messageService);
    }

    getAll(): Observable<User[]> {
        return this.http.get<User[]>(`${environment.apiUrl}/users`)
            .pipe(
                tap(_ => this.logd(`user`, `fetched users`)),
                catchError(this.handleError<User[]>('getAll', []))
            );
    }

    getAuthentication(username: string, password: string): Observable<User> {
        return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, {username, password})
            .pipe(
                tap(_ => this.logd(`user`, `authenticate user: ` + username)),
                catchError(this.handleError<User>('getAuthentication', null))
            );
    }
}
