import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PercentagePipe } from '../../pipes/percentage.pipe';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-custom-pipe',
  standalone: true,
  imports: [CommonModule, PercentagePipe, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, FilterPipe],
  templateUrl: './custom-pipe.component.html',
  styleUrl: './custom-pipe.component.css'
})
export class CustomPipeComponent {

  score : any
  total = 1000
  decimalPlaces = 2
  filterText = 'All'
 
  students = [
    {name: 'Satish', age: 44, gender: 'Male'},
    {name: 'Renu', age: 37, gender: 'Female'},
    {name: 'RSK', age: 40, gender: 'Male'},
    {name: 'Sita', age:24, gender: 'Female'}
  ]
  filterData = this.students
  onClick(marks: any){
    this.score = marks
  }

  onSelect(e : any){
    console.log("Selected: ", e.value)
    this.filterText = e.value
    // if(this.filterText === 'All'){
    //   this.filterData = this.students
    // }
    // else{
    // this.filterData  = this.students.filter(student => student.gender === this.filterText)
    // }
  }

  addNewData(){
    const newStudent = {
      name: 'Chikkie',
      age: 13,
      gender: 'Female'
    }
    this.students.push(newStudent)
  }


}
