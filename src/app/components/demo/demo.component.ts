import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnChanges{
@Input()  message: any
//  constructor(){
//   console.log("Demo Component Constructor Called.")
//   console.log("Message Value in Demo Constructor: ", this.message)
//  }

ngOnChanges(changes: SimpleChanges): void {
  // console.log("Message Value in Demo's OnChanges() ===> ", this.message)
  console.log("Changes: ", changes)
}

}
