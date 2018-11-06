import { Component, OnInit } from '@angular/core';
import {StudentRegistrationService} from '../../../services/business/forms/student-registration.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers:  [StudentRegistrationService]
})
export class StudentComponent implements OnInit {
  questions: any[];
  constructor(service: StudentRegistrationService) {
    this.questions = service.getQuestions();
  }

  ngOnInit() {
  }

}
