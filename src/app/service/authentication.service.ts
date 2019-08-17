import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../model/user';
import {environment} from '../../environments/environment';
import {BaseService} from './base.service';
import {MessageService} from './message.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService extends BaseService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient, messageService: MessageService) {
        super(messageService);
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        this.logd('authentication', '01: try login with username: ' + username + ' password: ' + password);
        this.logd('authentication', '02: ' + environment.apiUrl + '/users/authenticate');

        return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, {username, password})
            .pipe(
                map(user => {
                    // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
                    user.authdata = window.btoa(username + ':' + password);
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                    return user;
                })
            );
    }

    logout() {
        let us: string;
        us = localStorage.getItem('currentUser');
        console.log('current user: ' + us);
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
