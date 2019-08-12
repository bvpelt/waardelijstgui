import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {AuthenticationService} from './service/authentication.service';
import {User} from './model/user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    currentUser: User;

    title = 'Waardelijsten';

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        console.log('AppComponent')
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        console.log('AppComponent: logout');
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
