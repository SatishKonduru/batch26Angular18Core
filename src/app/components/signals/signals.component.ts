import { Component, signal } from '@angular/core';
import { TopicComponent } from "../topic/topic.component";
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [
    TopicComponent,
    MatButtonModule,
    CommonModule,
    MatIconModule
  ],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
  preserveWhitespaces: true
})
export class SignalsComponent {
  // counter = 0
  counter = signal(0)

  increment(){
    // this.counter++
    // Signals can be updated by using either set method or update method
    // using set method
  //  this.counter.set(this.counter() + 1) 

    //using update method
    this.counter.update(counter => counter + 1)
  }

  decrement(){
    // this.counter--
    // this.counter.set(this.counter() - 1)
    //using update method
    this.counter.update(c => c - 1)
  }
}
