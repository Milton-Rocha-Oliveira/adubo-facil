import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input()
  imgProduct:string = ""

  @Input()
  productName:string = ""

  @Input()
  productNameDetails:string = ""

  @Input()
  productDetails:string= ""

  @Input()
  productId:string = ""

  @Input()
  budgetLink:string = ""
}
 