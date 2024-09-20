import { Component, computed, signal } from '@angular/core';
import { TopicComponent } from "../topic/topic.component";
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';


interface myCounter{
  value: number
}

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
  // counter = signal(0) //  -> This is Writable Signal and Primitive datatype signal
  // counter = signal(0).asReadonly()  -> This is Read Only signal

  // counter = signal<myCounter>({
  //   value: 100
  // })   // This is Signal with an Object

  //Signal with an Array

  // counter = signal<number[]>([10])

  counter = signal(0)
  
  tenXCounter = computed( () => {
    const value = this.counter()
    return value * 10
  })

  hundredXCounter = computed(() => {
    const value = this.tenXCounter()
    return value * 10
  })

  increment(){
    // this.counter++
    // Signals can be updated by using either set method or update method
    // using set method
  //  this.counter.set(this.counter() + 1) 

    //using update method
    // this.counter.update(counter => counter + 1)

    //Updating Object value 
    // this.counter().value++
    // updating Object value by using set method
    // this.counter.set({
    //   value: this.counter().value + 1
    // })

    // Updating Object Signal using Update method
    // this.counter.update(counter => ({
    //   ...counter,
    //   value: counter.value + 1
    // }))
  }

  decrement(){
    // this.counter--
    // this.counter.set(this.counter() - 1)
    //using update method
    // this.counter.update(c => c - 1)

    //updating object value
    // this.counter().value--
    // Updating Object Signal value by using set method

    // this.counter.set({
    //   value: this.counter().value - 1
    // })
     // Updating Object Signal value by using update method
    //  this.counter.update(c => ({
    //   ...c,
    //   value: c.value - 1
    //  }))
  }

  append(){
    //using update method
    // this.counter.update(v => ([
    //   ...v,
    //   v[v.length - 1] + 10
    // ]))

    //using push method
    // this.counter().push(
    //   this.counter().at(this.counter().length - 1) + 10
    // )
  }
  remove(){
    //using update method
    // this.counter.update(v => ([
    //   ...v,
    //   v[v.length - 1] - 10
    // ]))
    //using pop method
    // this.counter().pop()
  }

  myIncrement(){
    this.counter.update(counter => counter+1)
  }
 
}
