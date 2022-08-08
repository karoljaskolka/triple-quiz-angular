import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { QuestionDto } from '../../../../core/dtos';

@Component({
  selector: 'tq-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnswersComponent implements OnInit, OnChanges {
  @Input() question?: QuestionDto;
  @Input() confirmed: boolean = false;

  indexes = [0, 1, 2, 3];
  checkedIndex: number = -1;
  A_CHAR_CODE = 65;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.shuffleAnswers();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['question']) {
      this.checkedIndex = -1;
      this.confirmed = false;
      this.cdRef.markForCheck();
    }
  }

  onCheck(index: number) {
    this.checkedIndex = index;
    this.cdRef.markForCheck();
  }

  getProperty(index: number) {
    return 'answer' + String.fromCharCode(this.A_CHAR_CODE + index);
  }

  shuffleAnswers() {
    this.indexes = this.indexes.sort(() => Math.random() - 0.5);
  }
}
