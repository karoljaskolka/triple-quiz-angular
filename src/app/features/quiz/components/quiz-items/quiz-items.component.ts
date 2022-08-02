import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { QuizDto } from '../../../../core/dtos/quiz';

@Component({
  selector: 'tq-quiz-items',
  templateUrl: './quiz-items.component.html',
  styleUrls: ['./quiz-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizItemsComponent {
  @Input() quizzes: QuizDto[] = [];
}
