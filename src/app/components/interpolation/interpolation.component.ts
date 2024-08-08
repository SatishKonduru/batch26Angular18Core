import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  standalone: true,
  imports: [],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css'
})
export class InterpolationComponent {
  name : string = 'Satish Konduru'
  getName(){
    return 'RSK'
  }
  age = 20

  getUpdatedName() {
    const fName = "RSK"
    const lName = 'Family'
    // return  `${fName} + ${lName}` 
    return  `${fName}` + `${lName}` 
    // return fName + lName 
  }


}
