import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'tq-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent
  implements OnInit, OnChanges, OnDestroy, AfterViewInit
{
  @Input() max: number = 0;
  @Input() counter: number = 0;
  @Output() interval = new EventEmitter<number>();
  @ViewChild('progress') progress?: ElementRef;

  intervalSub$: Subscription = Subscription.EMPTY;

  constructor(private renderer: Renderer2, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.intervalSub$ = interval(1000).subscribe(() => {
      if (this.counter > 0) {
        this.interval.emit(this.counter - 1);
      } else {
        this.interval.emit(0);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['counter']) {
      this.setProgress();
    }
  }

  ngAfterViewInit(): void {
    this.setProgress();
  }

  setProgress() {
    if (this.progress) {
      const degree = ((this.max - this.counter) / this.max) * 360;
      this.renderer.setStyle(
        this.progress.nativeElement,
        'background',
        `conic-gradient(#3A4750 ${degree}deg, #C5A51B ${degree}deg 360deg)`
      );
      this.cdRef.markForCheck();
    }
  }

  ngOnDestroy(): void {
    this.intervalSub$?.unsubscribe();
  }
}
