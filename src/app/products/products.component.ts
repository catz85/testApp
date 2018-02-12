import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Data} from "@angular/router";
import {ProductModel} from "../models/product.model";
import { AuthenticationService } from '../services/auth.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: ProductModel[];
  constructor(private route: ActivatedRoute, private authService: AuthenticationService) { }

  ngOnInit() {
    this.products = this.route.snapshot.data['products']
  }
  logout() {
    this.authService.logout()
  }
}
