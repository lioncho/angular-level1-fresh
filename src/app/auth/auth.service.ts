import {User} from './user.model';
import {AuthData} from './auth-data.model';
import {Subject} from 'rxjs/Subject';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
    authChange = new Subject<boolean>();
    private user: User;

    constructor(private router: Router) {}

    registerUser(authData: AuthData) {
        // Without Server
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 100000).toString()
        };
        this.authSuccessfully();
        this.router.navigate(['/training']);
    }

    login(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 100000).toString()
        };
        this.authSuccessfully();
        this.router.navigate(['/training']);
    }

    logout() {
        this.user = null;
        this.authChange.next(false);
        this.router.navigate(['/login']);
    }

    getUser() {
        return { ...this.user };
    }

    isAuth() {
        return this.user != null;
    }

    authSuccessfully() {
        this.authChange.next(true);
    }

}
