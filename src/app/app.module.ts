import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
 
import { AppComponent } from './app.component';
import { StudentComponent } from './components/business/student/student.component';
import { CourseComponent } from './components/business/course/course.component';
import { LectuerComponent } from './components/business/lectuer/lectuer.component';
import { InquieryComponent } from './components/business/inquiery/inquiery.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { NavBarComponent } from './components/common/nav-bar/nav-bar.component';
import { FormsComponent } from './components/common/forms/forms.component';
import { DynamicFormComponent } from './components/common/forms/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './components/common/forms/dynamic-form-question/dynamic-form-question.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    CourseComponent,
    LectuerComponent,
    InquieryComponent,
    NavBarComponent,
    FormsComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

// private newMethod(): string {
//   return 'lectuer';
// }
}
