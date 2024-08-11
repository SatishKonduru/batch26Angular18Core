import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temp-ref-variables',
  standalone: true,
  imports: [MatDividerModule, CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './temp-ref-variables.component.html',
  styleUrl: './temp-ref-variables.component.css'
})
export class TempRefVariablesComponent {
  name: string = ''
  myPlace : string = ''
  getName(newName: string){
    this.name = newName
    
    // console.log(`My name is ${this.name}`)
  }
  clearName(){
    this.name  = ''
  }
}
