import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-if',
  standalone: true,
  imports: [MatDividerModule, CommonModule],
  templateUrl: './if.component.html',
  styleUrl: './if.component.css'
})
export class IfComponent {
show = false
score = 95

student = {
  name: 'Satish',
  course: 'Angular'
}
}
