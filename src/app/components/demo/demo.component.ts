import { AfterContentInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { DocumentHighlights } from 'typescript';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnChanges, OnInit, DoCheck, AfterContentInit{
@ContentChild('para') paragraph : ElementRef

// @ViewChild('myMessage') myMessage: ElementRef
// @Input()  message : any
//  constructor(){
//   console.log("Demo Component Constructor Called.")
//   console.log("Message Value in Demo Constructor: ", this.message)
//  }

ngOnChanges(changes: SimpleChanges): void {
  // console.log("Message Value in Demo's OnChanges() ===> ", this.message)
  // console.log("Demo OnChanges Called....")
  // console.log("Changes: ", changes)
}

ngOnInit(): void {
  // console.log("Demo's OnInit Called....")
  // console.log("MyMessage value in Demo's OnInit: ", this.myMessage.nativeElement.innerHTML)
}

ngDoCheck(): void {
  // console.log("In Demo's DoCheck value of paragraph: ", this.paragraph)
}

ngAfterContentInit(): void {
  console.log("Demo's ngAfterContentInit called....")
  console.log("In Demo's AfterContentInit value of paragaraph: ", this.paragraph.nativeElement)
}



}
