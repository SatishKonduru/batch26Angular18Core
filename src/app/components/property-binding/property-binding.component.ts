import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [MatInputModule, CommonModule, MatFormFieldModule],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {
  isDisabled: boolean = false
  idValue = 'Satish'

}
