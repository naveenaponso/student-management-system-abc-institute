import { Injectable } from '@angular/core';
import {QuestionBase} from '../../../models/forms/question-base.module';
import {DropdownQuestion} from '../../../models/forms/question-dropdown.module';
import {TextboxQuestion} from '../../../models/forms/question-text-box.module';

@Injectable({
  providedIn: 'root'
})
export class LecturerRegistrationService {
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: '',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'lastName',
        label: 'Last name',
        value: '',
        required: true,
        order: 2
      }),

      new DropdownQuestion({
        key: 'gender',
        label: 'Gender',
        options: [
          {key: 'male', value: 'Male'},
          {key: 'female', value: 'Female'},
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 4
      })

    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
