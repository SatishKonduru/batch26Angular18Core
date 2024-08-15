import { Component,  EventEmitter,  Input, Output } from '@angular/core';
import { SenderComponent } from "../sender/sender.component";
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-receiver',
  standalone: true,
  imports: [SenderComponent, MatButtonModule, CommonModule],
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.css'
})
export class ReceiverComponent {
@Input()  postman: any

@Output() receiverCompData = new EventEmitter()
// receiverCompData = "This is Receiver component Data"

replyMessage(){
  this.receiverCompData.emit('This is Receiver component Data')
}
}
