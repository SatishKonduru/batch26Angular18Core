import { Routes } from '@angular/router';
import { CourseComponent } from './components/course/course.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SelectedCourseComponent } from './components/selected-course/selected-course.component';
import { SelectedCourseDetailsComponent } from './components/selected-course-details/selected-course-details.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: '', //localhost:4200
        redirectTo: '/home', //localhost:4200/home
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
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
        component: SelectedCourseComponent,
        children: [
            {
                path: 'selectedCourseDetails',
                component: SelectedCourseDetailsComponent
            }
        ]
    },
    {
        path: 'selectedCourse', //queryParams
        component: SelectedCourseComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'userDashboard',
        component: UserDashboardComponent,
        canActivate: [authGuard]
    },
    {
        path: 'adminDashboard',
        component: AdminDashboardComponent,
        canActivate: [authGuard]
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
   
];
