import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [MatDividerModule, CommonModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {
  numbers = [10,20,30,40,50]
  persons =  [
    { name: 'Satish', age: 44  },
    { name: 'Renu', age: 37  },
    { name: 'RSK', age: 16  }
 ]
}
