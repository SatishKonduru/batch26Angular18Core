import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent implements OnInit{
  router = inject(Router)
  courseList = [
    {id: 1, name: 'Angular', tutor: 'Satish'},
    {id: 2, name: 'Angular Material', tutor: 'Satish Konduru'},
    {id: 3, name: 'Bootstrap', tutor: 'RSK'},
    {id: 4, name: 'NodeJS', tutor: 'Renu'},
  ]
courseKeys: string[];
 ngOnInit(): void {
   this.courseKeys = Object.keys(this.courseList[0])
 }

 onSelect(course: any){
  console.log("Selected Course: ", course)
  this.router.navigate(['/selectedCourse', JSON.stringify(course)])
 }
}
