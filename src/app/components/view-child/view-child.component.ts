import { Component, ElementRef, ViewChild } from '@angular/core';
import { TopicComponent } from "../topic/topic.component";
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [TopicComponent, MatFormFieldModule, CommonModule,MatInputModule, MatButtonModule],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent {
topic = "@ViewChild()"
inputValue : any

@ViewChild('input') e : ElementRef;
@ViewChild('myPara', {static: true}) mPara : ElementRef

// @ViewChild syntax
// @ViewChild('refName', {static: true/false} )
// if static: true --> when the view is iniitalized for the first time (Before first Change Detection)
// if static : false --> if you want it to be resolved after EVERY change Detection
// @ViewChild() returns the first matching element

// getValue(e : HTMLInputElement){
//   this.inputValue = e.value
// }

getValue(){
  this.inputValue = this.e.nativeElement.value
  console.log(this.mPara.nativeElement.innerHTML)
}


}
