import { Routes } from '@angular/router';
import { CourseComponent } from './components/course/course.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SelectedCourseComponent } from './components/selected-course/selected-course.component';

export const routes: Routes = [
    {
        path: 'course', //localhost:4200/course
        component: CourseComponent
    },
   {
        path: 'courseDetails', //localhost:4200/courseDetails
        component: CourseDetailsComponent
    },
    {
        path: 'courseDetails/:id',
        component: CourseDetailsComponent
    },
    {
        path: 'selectedCourse/:course', // Route Parameters
        component: SelectedCourseComponent
    },
    {
        path: 'selectedCourse',
        component: SelectedCourseComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
   
];
