import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { InterpolationComponent } from "./components/interpolation/interpolation.component";
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';



@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, HeaderComponent, InterpolationComponent, PropertyBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces: true 
})
export class AppComponent {
  title = 'batch26Angular18Core';
}
