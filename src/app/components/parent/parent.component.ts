import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { TopicComponent } from "../topic/topic.component";
import { ChildComponent } from "../child/child.component";
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [TopicComponent, ChildComponent, MatButtonModule, CommonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  topic = "Component Communication using @ViewChild() and @ViewChildren()"
  // @ViewChild(ChildComponent) childComponent :  ChildComponent
  // @ViewChild('address') addr : ElementRef

@ViewChildren('address') address : QueryList<ElementRef>
@ViewChildren(ChildComponent) childrenComponents : QueryList<ChildComponent>

  childMsg : any
  
  accessChild(){
    // console.log("Here I am trying to access property value from Child component")
    // alert(this.childComponent.childProperty)
    // this.childMsg = this.childComponent.childProperty
  }

  getAddress(){
  // console.log("Address: ", this.addr.nativeElement.value)
   this.address.forEach((x, index) => {
    console.log(`Address: ${index+1} = ${x.nativeElement.value}`)
   }) 
 

  }

  getChildren(){
    this.childrenComponents.forEach((child, index) => {
      alert (`Child: ${index + 1 } ==> ${child.childProperty}`)
    })
  }

}
