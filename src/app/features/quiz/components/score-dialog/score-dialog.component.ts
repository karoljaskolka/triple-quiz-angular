import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'tq-score-dialog',
  templateUrl: './score-dialog.component.html',
  styleUrls: ['./score-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoreDialogComponent implements OnInit, OnDestroy {
  @Input() score: number = 0;
  @Input() maxScore: number = 0;
  @Input() scorePercentage: number = 0;
  @Output() close = new EventEmitter<boolean>();

  ngOnInit(): void {
    document.body.classList.add('dialog');
  }

  @HostListener('keydown.escape', ['$event'])
  onClose() {
    this.close.emit();
  }

  ngOnDestroy(): void {
    document.body.classList.remove('dialog');
  }
}
