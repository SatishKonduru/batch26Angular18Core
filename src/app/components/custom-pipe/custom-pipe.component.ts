import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PercentagePipe } from '../../pipes/percentage.pipe';

@Component({
  selector: 'app-custom-pipe',
  standalone: true,
  imports: [CommonModule, PercentagePipe],
  templateUrl: './custom-pipe.component.html',
  styleUrl: './custom-pipe.component.css'
})
export class CustomPipeComponent {

  score = 777
  total = 1000
  decimalPlaces = 3
}
