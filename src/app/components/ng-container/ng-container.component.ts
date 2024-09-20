import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-ng-container',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.css'
})
export class NgContainerComponent {
  check: boolean = false

  toggle(){
    this.check = !this.check
  }
}
