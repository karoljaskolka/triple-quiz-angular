import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { QuizDto } from '../../../../core/dtos/quiz';
import { faRankingStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'tq-score-header',
  templateUrl: './score-header.component.html',
  styleUrls: ['./score-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoreHeaderComponent {
  @Input() quiz?: QuizDto;

  faRankingStar = faRankingStar;
}
