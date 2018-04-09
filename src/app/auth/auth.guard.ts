import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../shared/user.service';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private userService: UserService) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        if (this.userService.isLogin()) {
            return true;
        } else {
            this.router.navigate(['auth']);
            return false;
        }
    }
}
