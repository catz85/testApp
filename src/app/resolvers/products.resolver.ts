import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {ProductModel} from "../models/product.model";
import {Observable} from "rxjs/Observable";
import {ProductService} from "../services/products.service";

@Injectable()
export class ProductsResolver implements Resolve<ProductModel[]> {
    constructor(private productsService: ProductService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductModel[]>{
        return this.productsService.getProducts() 
    }
}