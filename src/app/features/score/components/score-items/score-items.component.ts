import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ScoreDto } from '../../../../core/dtos';
import { uuid } from '../../../../core/types';

@Component({
  selector: 'tq-score-items',
  templateUrl: './score-items.component.html',
  styleUrls: ['./score-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoreItemsComponent {
  @Input() scores: ScoreDto[] = [];

  trackById(index: number, quiz: ScoreDto): uuid {
    return quiz.id;
  }
}
