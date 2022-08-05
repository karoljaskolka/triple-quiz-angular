import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'tq-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
  @Input() size: 'sm' | 'lg' = 'sm';
  @Input() reverse: boolean = false;
}
