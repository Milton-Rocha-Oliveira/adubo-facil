import { Component } from '@angular/core';
import { ImgComponent } from "./img/img.component";
import { TextCardComponent } from "./text-card/text-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ImgComponent, TextCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
