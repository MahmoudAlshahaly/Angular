import { Component } from '@angular/core';
import { productlist } from '../models/productlist';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = productlist;

}
