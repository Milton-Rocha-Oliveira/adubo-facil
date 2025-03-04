import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { HelpAndSupportComponent } from "./help-and-support/help-and-support.component";
import { AboutTheCompanyComponent } from "./about-the-company/about-the-company.component";
import { SocialMediaAndSummaryComponent } from "./social-media-and-summary/social-media-and-summary.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, HomeComponent, ProductsComponent, HelpAndSupportComponent, AboutTheCompanyComponent, SocialMediaAndSummaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'adubo-facil';
}
