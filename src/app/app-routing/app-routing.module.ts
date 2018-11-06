import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { StudentComponent } from '../components/business/student/student.component';
import { LectuerComponent } from '../components/business/lectuer/lectuer.component';
import { AppComponent } from '../app.component';
import {CourseComponent} from '../components/business/course/course.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home', component: AppComponent },
  { path: 'student', component: StudentComponent },
  { path: 'lecturer', component: LectuerComponent },
  { path: 'course', component: CourseComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
