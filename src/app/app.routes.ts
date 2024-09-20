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
import { authGuard, authGuardChild } from './guards/auth.guard';
import { unsavedPageGuard } from './guards/unsaved-page.guard';
import { BuiltInPipesComponent } from './components/built-in-pipes/built-in-pipes.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { LazyCompComponent } from './components/lazy-comp/lazy-comp.component';

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
        canActivateChild: [authGuardChild],
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
        component: LoginComponent,
        // canDeactivate: [unsavedPageGuard]
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
        path: 'pipes',
        component: BuiltInPipesComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'reactiveForm',
        component: ReactiveFormComponent
    },
    {
        path: 'lazy',
        loadComponent: () => import('./components/lazy-comp/lazy-comp.component').then(comp => comp.LazyCompComponent)
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
   
];
