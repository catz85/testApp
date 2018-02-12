import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {ConfigService} from './api-config.service';

import {BaseService} from "./base.service";

import {Observable} from 'rxjs/Rx';

import '../rxjsoperators';
import {Router} from "@angular/router";

@Injectable()

export class AuthenticationService extends BaseService {
    baseUrl:string = '';

    constructor(private http:Http, private configService:ConfigService, private router: Router) {
        super();
        this.baseUrl = configService.getApiURI();
    }

    getFormUrlEncoded(toConvert) {
        const formBody = [];
        for (const property in toConvert) {
            const encodedKey = encodeURIComponent(property);
            const encodedValue = encodeURIComponent(toConvert[property]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        return formBody.join('&');
    }

    login(userName, password) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        //Doesnt WORK!!! https://github.com/angular/angular/issues/13241
        // let formData = new FormData();
        // formData.append('UserName', userName);
        // formData.append('Password', password);
        // WORKAROUND with getFormUlrEncoded
        let formData = {
            'UserName' : userName,
            'Password' : password
        }

        return this.http
            .post(
                this.baseUrl + '/jwt',
                this.getFormUrlEncoded(formData),
                {headers}
            ).map(res => {
                let response = res.json()
                localStorage.setItem('auth_token', response.access_token);
                localStorage.setItem('expire', (response.expires_in * 1000 + +new Date()).toString());
                return true;
            })
            .catch((error)=>{
                return Observable.throw(error._body || 'Server Error');
            })
    }

    logout() {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('expire');
        this.router.navigate(['/login'])
    }
    getToket() {
        return localStorage.getItem('auth_token');
    }
    isLoggedIn() {
        return !!localStorage.getItem('auth_token') && (+localStorage.getItem('expire') - +new Date() > 0);
    }
}
