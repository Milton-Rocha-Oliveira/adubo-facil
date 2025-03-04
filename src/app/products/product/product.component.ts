import { Component, Input } from '@angular/core';
import { ProductDetailsComponent } from "../product-details/product-details.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductDetailsComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input()
  imgProduct:string = ""

  @Input()
  productName:string = ""

}
 