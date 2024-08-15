import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import { ReceiverComponent } from "../receiver/receiver.component";

@Component({
  selector: 'app-sender',
  standalone: true,
  imports: [MatDividerModule, CommonModule, ReceiverComponent],
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.css'
})
export class SenderComponent {
message = 'This message is from Sender component. VERY IMP MESSAGE'
msg : any
}
