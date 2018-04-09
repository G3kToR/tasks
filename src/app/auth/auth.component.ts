import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Router} from '@angular/router';
import {UserService} from '../shared/user.service';


@Component({
    selector: 'app-auth',
    templateUrl: 'auth.component.html',
    styles: [`
        .auth-form { width: 50%; margin: 50px auto; }
    `],
})
export class AuthComponent {

    @Output() onLogin = new EventEmitter<boolean>();
    public connectErr = false;
    public authForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService,
        private router: Router) {

        this.authForm = formBuilder.group({
            'userLogin': ['',
                [
                    Validators.required,
                    Validators.pattern('[a-zA-Z0-9_]{4,12}'),
                ],
            ],
            'userPass': ['',
                [
                    Validators.required,
                    Validators.pattern('(?=^.{6,20}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$'),
                ],
            ],
        });
    }

    submit() {
        this.userService.logIn(
            this.authForm.value.userLogin, this.authForm.value.userPass
        ).subscribe(
            (data) => {
                if (data) {
                    this.onLogin.emit();
                    this.router.navigate(['']);
                } else { this.authForm.reset(); }
            },
            () => this.connectErr = true
        );
    }

}
