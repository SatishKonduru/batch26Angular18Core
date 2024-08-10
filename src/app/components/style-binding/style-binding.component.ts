import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-style-binding',
  standalone: true,
  imports: [MatDividerModule, CommonModule],
  templateUrl: './style-binding.component.html',
  styleUrl: './style-binding.component.css'
})
export class StyleBindingComponent {
  textColor = 'brown'
  textSize = '40px'
  myStyle = {
    color: this.textColor,
    fontSize: this.textSize
  }
  myValue = 10
}
