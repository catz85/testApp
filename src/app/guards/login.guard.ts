import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {AuthenticationService} from "../services/auth.service";

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthenticationService) { }

    canActivate() {
        if (!this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/products']);
        return false;
    }
}