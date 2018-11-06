import {Injectable} from '@angular/core';
import {QuestionBase} from '../../../models/forms/question-base.module';
import {TextboxQuestion} from '../../../models/forms/question-text-box.module';

@Injectable({
  providedIn: 'root'
})
export class CourseRegistrationService {
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new TextboxQuestion({
        key: 'courseName',
        label: 'Course Name',
        order: 2
      }),

      new TextboxQuestion({
        key: 'duration',
        label: 'Duration',
        order: 2
      })

    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
