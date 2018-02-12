import {Component, OnInit, Input} from '@angular/core';
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product:ProductModel;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
