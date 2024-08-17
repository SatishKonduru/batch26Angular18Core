import { Component, ViewChild } from '@angular/core';
import { TopicComponent } from "../topic/topic.component";
import { ChildComponent } from "../child/child.component";
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [TopicComponent, ChildComponent, MatButtonModule, CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  topic = "Component Communication using @ViewChild()"
  @ViewChild(ChildComponent) childComponent :  ChildComponent
  
  childMsg : any
  
  accessChild(){
    console.log("Here I am trying to access property value from Child component")
    alert(this.childComponent.childProperty)
    this.childMsg = this.childComponent.childProperty
  }
}
