import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { uuid } from '../../../../core/types';
import { QuizDto } from '../../../../core/dtos';

@Component({
  selector: 'tq-quiz-items',
  templateUrl: './quiz-items.component.html',
  styleUrls: ['./quiz-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizItemsComponent {
  @Input() quizzes: QuizDto[] = [];

  trackById(index: number, quiz: QuizDto): uuid {
    return quiz.id;
  }
}
