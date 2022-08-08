import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ScoreDto } from '../../../../core/dtos';
import { faAward, faCalendarDays } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'tq-score-item',
  templateUrl: './score-item.component.html',
  styleUrls: ['./score-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoreItemComponent {
  @Input() index?: number;
  @Input() score?: ScoreDto;

  faAward = faAward;
  faCalendarDays = faCalendarDays;
}
