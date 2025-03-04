import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  @Input()
  imgProduct:string = ""

  @Input()
  productDetails:string = ""

  
}
