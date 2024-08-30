import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnChanges, OnInit{
@ViewChild('myMessage') myMessage: ElementRef
@Input()  message : any
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



}
