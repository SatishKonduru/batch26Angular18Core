import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';



@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces: true 
})
export class AppComponent {
  title = 'batch26Angular18Core';
}
