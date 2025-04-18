import { Component, Input } from '@angular/core';
import { ProductComponent } from "./product/product.component";


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  @Input()
  imgProduct:string = ""

  @Input()
  productName:string = ""

  @Input()
  productDetails: string = ""
}
