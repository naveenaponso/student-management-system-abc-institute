import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {StudentRegistrationService} from '../../../services/business/forms/student-registration.service';
import {LecturerRegistrationService} from '../../../services/business/forms/lecturer-registration.service';

@Component({
  selector: 'app-lectuer',
  templateUrl: './lectuer.component.html',
  styleUrls: ['./lectuer.component.css']
})
export class LectuerComponent implements OnInit {
  questions: any[];
  constructor(service: LecturerRegistrationService) {
    this.questions = service.getQuestions();
  }

  ngOnInit(): void {
  }

}
