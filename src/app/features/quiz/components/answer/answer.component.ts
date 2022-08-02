import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'tq-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnswerComponent {
  @Input() checked: boolean = false;
  @Input() correct: boolean = false;
  @Input() incorrect: boolean = false;
  @Input() disabled: boolean = false;

  @Output() onAnswerCheck = new EventEmitter<void>();
}
