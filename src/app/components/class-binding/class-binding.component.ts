import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-class-binding',
  standalone: true,
  imports: [MatDividerModule, CommonModule],
  templateUrl: './class-binding.component.html',
  styleUrl: './class-binding.component.css'
})
export class ClassBindingComponent {
  textColor = 'textColor'
  textSize = 'textSize'
  myClass = {
    textColor: 'textColor',
    textSize: 'textSize'
  }

}
