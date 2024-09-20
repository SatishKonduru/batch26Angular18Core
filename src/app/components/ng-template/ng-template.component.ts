import { Component } from '@angular/core';
import { TopicComponent } from "../topic/topic.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-template',
  standalone: true,
  imports: [TopicComponent, CommonModule],
  templateUrl: './ng-template.component.html',
  styleUrl: './ng-template.component.css'
})
export class NgTemplateComponent {

}
