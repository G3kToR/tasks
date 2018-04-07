import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit {

    public auth: boolean; // Показывать форму автризации

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.auth = this.userService.isLogin(); // Проверяет авторизирован ли пользователь
    }
}
