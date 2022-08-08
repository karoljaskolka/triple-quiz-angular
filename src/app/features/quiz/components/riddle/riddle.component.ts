import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { QuestionDto } from '../../../../core/dtos';
import { AnswersComponent } from '../answers/answers.component';

@Component({
  selector: 'tq-riddle',
  templateUrl: './riddle.component.html',
  styleUrls: ['./riddle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RiddleComponent {
  @Input() question?: QuestionDto;
  @Input() lastQuestion: boolean = false;
  @Input() maxPoints: number = 5;
  @Input() total: number = 0;
  @Input() currentIndex: number = 0;
  @Output() onNext = new EventEmitter<number>();
  @ViewChild(AnswersComponent) answers?: AnswersComponent;

  MAX_TIME: number = 30;
  confirmed: boolean = false;
  timeLeft: number = this.MAX_TIME;
  points: number = 0;

  constructor(private cdRef: ChangeDetectorRef) {}

  onInterval(counter: number) {
    if (counter > 0) {
      this.timeLeft = counter;
      this.cdRef.markForCheck();
    } else {
      if (!this.confirmed) this.check();
    }
  }

  confirm() {
    this.timeLeft = 0;
    this.confirmed = true;
    this.cdRef.markForCheck();
  }

  calcPoints() {
    const periods = this.MAX_TIME / this.maxPoints;
    // calc points out of maxPoints per question
    // * if time passed but answer is correct then award with 1 point
    const points = Math.ceil(this.timeLeft / periods) || 1;
    this.points =
      this.answers?.checkedIndex === this.question?.correct ? points : 0;
  }

  check() {
    this.calcPoints();
    this.confirm();
  }

  next() {
    if (!this.lastQuestion) {
      this.confirmed = false;
      this.timeLeft = this.MAX_TIME;
    }
    this.onNext.emit(this.points);
  }
}
