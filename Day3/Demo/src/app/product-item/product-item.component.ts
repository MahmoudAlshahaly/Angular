import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: any;

  quantity() {
    if (this.product.quantity == 0) return 'no product Available';
    else if (this.product.quantity == 1) return 'Only one item Available';
    else {
      return this.product.quantity;
    }
  }
}
