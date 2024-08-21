import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import { BackgroundDirective } from '../../directives/background.directive';



@Component({
  selector: 'app-topic',
  standalone: true,
  imports: [MatDividerModule, CommonModule, BackgroundDirective],
  templateUrl: './topic.component.html',
  styleUrl: './topic.component.css'
})
export class TopicComponent {
@Input()  topicName: any
}
