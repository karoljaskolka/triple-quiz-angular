import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ScoreDto } from '../../../../core/dtos/score';

@Component({
  selector: 'tq-score-items',
  templateUrl: './score-items.component.html',
  styleUrls: ['./score-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoreItemsComponent {
  @Input() scores: ScoreDto[] = [];
}
