import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { QuizDto } from '../../../../core/dtos';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'tq-quiz-item',
  templateUrl: './quiz-item.component.html',
  styleUrls: ['./quiz-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizItemComponent {
  @Input() quiz?: QuizDto;

  faGamepad = faGamepad;
}
