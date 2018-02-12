import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from './auth.service';
import { ProductModel } from '../models/product.model';

@Injectable()
export class ProductService {
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService ) {
    }

    getProducts(): Observable<ProductModel[]> {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.getToket() });
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.get(this.authenticationService.baseUrl + '/Products', {headers})
            .map((response) => response.json());
    }
}