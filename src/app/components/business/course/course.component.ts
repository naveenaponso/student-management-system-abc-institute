import {Component, OnInit} from '@angular/core';
import {CourseRegistrationService} from '../../../services/business/forms/course-registration.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {

  questions: any[];

  constructor(service: CourseRegistrationService) {
    this.questions = service.getQuestions();
  }

  ngOnInit() {
  }

}
