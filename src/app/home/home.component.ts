import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';

import {User} from '../model/user';
import {UserService} from '../service/user.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    loading = false;
    users: User[];

    title = 'Waardelijsten';

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll()
            .pipe(first())
            .subscribe(users => {
                this.loading = false;
                this.users = users;
            });
    }

}
