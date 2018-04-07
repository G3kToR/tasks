import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

    private userInfo: User = new User(0, '');

    constructor(private http: HttpClient) { }

    public logIn(login: string, pass: string): Observable<boolean> {
        // Запрос на сервер
        return this.http.get('assets/users.json').map(data => {

            data['users'].map(user => {
                if (user.login === login && user.pass === pass)
                    this.userInfo = new User(user.id, user.login);
            });

            if (this.isLogin()) return true;
            else return false;

        }).take(1);
    }

    public isLogin(): boolean {
        return (this.userInfo.id > 0) ? true : false;
    }

    public getUserId(): number {
        return this.userInfo.id;
    }

}

class User {
    constructor(public id: number, public login: string) { }
}
