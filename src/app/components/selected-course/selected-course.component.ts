import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-selected-course',
  standalone: true,
  imports: [MatButtonModule, CommonModule, RouterModule],
  templateUrl: './selected-course.component.html',
  styleUrl: './selected-course.component.css',
  preserveWhitespaces: true
})
export class SelectedCourseComponent implements OnInit{
//  constructor(activatedRoute: ActivatedRoute){}
activatedRoute = inject(ActivatedRoute)
router = inject(Router)
myCourse: any
ngOnInit(): void {
  this.activatedRoute.paramMap.subscribe(params => {
    const getParams = params.get('course')
    this.myCourse = JSON.parse(getParams)
    console.log("In Selected Course Component: ", this.myCourse)
  })
  // this.activatedRoute.queryParams.subscribe(params => {
  //   this.myCourse = JSON.parse(params['course'])
  // })
}

goBack(){
this.router.navigate(['/courseDetails', this.myCourse.id]) //using route parameters
}

viewDetails(){
  this.router.navigate(['selectedCourseDetails'],{relativeTo: this.activatedRoute})
}


}
