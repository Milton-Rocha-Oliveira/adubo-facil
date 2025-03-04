import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-about-the-company',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './about-the-company.component.html',
  styleUrl: './about-the-company.component.css'
})
export class AboutTheCompanyComponent {

}
