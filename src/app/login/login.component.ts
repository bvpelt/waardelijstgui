import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {first, tap} from 'rxjs/operators';
import {AuthenticationService} from '../service/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    title = 'Login'

    constructor(private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private authenticationService: AuthenticationService) { // redirect to home if already logged in
        console.log('constructor LoginComponent')
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        } else {
            console.log('LoginComponent: no current user');
        }
    }

    ngOnInit() {
        console.log('LoginComponent: ngOnInit');
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.loginForm.controls;
    }

    onSubmit() {
        console.log('LoginComponent: onSubmit');

        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        console.log('LoginComponent: try login');
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(
                first()
            )
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }
}
