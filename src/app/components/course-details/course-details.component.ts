import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
  providers: [CourseService]
})
export class CourseDetailsComponent implements OnInit{
  router = inject(Router)
  courseService = inject(CourseService)
  activatedRoute = inject(ActivatedRoute)
  courseList: any[]
  // courseList = [
  //   {id: 1, name: 'Angular', tutor: 'Satish'},
  //   {id: 2, name: 'Angular Material', tutor: 'Satish Konduru'},
  //   {id: 3, name: 'Bootstrap', tutor: 'RSK'},
  //   {id: 4, name: 'NodeJS', tutor: 'Renu'},
  // ]
courseKeys: string[];
courseId: any
selected = 'selected'
 ngOnInit(): void {

  this.getCourseNames()

  //  this.courseKeys = Object.keys(this.courseList[0])
  //   this.activatedRoute.paramMap.subscribe(params => {
  //     if(params){
  //       this.courseId = params.get('id')
  //     }
  //   })

 }

 onSelect(course: any){
  console.log("Selected Course: ", course)
  this.router.navigate(['/selectedCourse', JSON.stringify(course)]) //configuring route parameters
  // this.router.navigate(['/selectedCourse'],{queryParams: {course: JSON.stringify(course) }}) //QueryParams
}

getSelected(course: any){
  return course.id == this.courseId 
}

  getCourseNames(){
    this.courseService.courseNames().subscribe({
      next: (res: any) => {
        this.courseList = res
        this.courseKeys = Object.keys(this.courseList[0])
      },
      error : (err: any) => {
        console.log("Error while getting course details: ", err)
      }
    })
  }

}
