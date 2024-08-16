import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-topic',
  standalone: true,
  imports: [MatDividerModule, CommonModule],
  templateUrl: './topic.component.html',
  styleUrl: './topic.component.css'
})
export class TopicComponent {
@Input()  topicName: any
}
