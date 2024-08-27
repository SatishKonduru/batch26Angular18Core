import { Component } from '@angular/core';
import { AboutusComponent } from "../aboutus/aboutus.component";
import { ServicesComponent } from "../services/services.component";
import { ProductsComponent } from "../products/products.component";
import { CareersComponent } from "../careers/careers.component";
import { ContactusComponent } from "../contactus/contactus.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutusComponent, ServicesComponent, ProductsComponent, CareersComponent, ContactusComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
