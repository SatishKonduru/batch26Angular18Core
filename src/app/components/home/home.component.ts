import { Component } from '@angular/core';
import { AboutusComponent } from "../aboutus/aboutus.component";
import { ServicesComponent } from "../services/services.component";
import { ProductsComponent } from "../products/products.component";
import { CareersComponent } from "../careers/careers.component";
import { ContactusComponent } from "../contactus/contactus.component";
import { DemoComponent } from "../demo/demo.component";
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutusComponent, ServicesComponent, ProductsComponent, CareersComponent, ContactusComponent, DemoComponent, MatButtonModule, CommonModule,MatFormFieldModule, MatInputModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  inputValue: any =""
  onClick(value: any){
    this.inputValue = value
  }
}
