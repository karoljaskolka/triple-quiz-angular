import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'tq-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineComponent implements OnChanges, AfterViewInit {
  @Input() total: number = 0;
  @Input() currentIndex: number = 0;

  indexes: number[] = [];

  @ViewChild('progress') progress?: ElementRef;

  constructor(private renderer: Renderer2, private cdRef: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['total'] || changes['currentIndex']) {
      this.setProgress();
    }
    if (changes['total']) {
      this.setIndexes();
    }
  }

  ngAfterViewInit(): void {
    this.setProgress();
  }

  setIndexes() {
    this.indexes = [...Array(this.total + 1).keys()];
  }

  setProgress() {
    if (this.progress) {
      this.renderer.setStyle(
        this.progress.nativeElement,
        'width',
        `${(this.currentIndex / this.total) * 100}%`
      );
      this.cdRef.markForCheck();
    }
  }

  getCirclePosition(index: number) {
    return `calc(${(index / this.total) * 100}% - 12px)`; // circle width / 2 = 12px
  }
}
