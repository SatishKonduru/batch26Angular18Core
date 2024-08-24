import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selected-course',
  standalone: true,
  imports: [],
  templateUrl: './selected-course.component.html',
  styleUrl: './selected-course.component.css'
})
export class SelectedCourseComponent implements OnInit{
//  constructor(activatedRoute: ActivatedRoute){}
activatedRoute = inject(ActivatedRoute)
myCourse: any
ngOnInit(): void {
  this.activatedRoute.paramMap.subscribe(params => {
    const getParams = params.get('course')
    this.myCourse = JSON.parse(getParams)
    console.log("In Selected Course Component: ", this.myCourse)
  })
}
}
