import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tq-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionComponent {}
