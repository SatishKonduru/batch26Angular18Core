import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-switch-case',
  standalone: true,
  imports: [MatDividerModule, CommonModule],
  templateUrl: './switch-case.component.html',
  styleUrl: './switch-case.component.css'
})
export class SwitchCaseComponent {
  public day = 5
  color = 'pink'
}
