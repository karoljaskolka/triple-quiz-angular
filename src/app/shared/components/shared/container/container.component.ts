import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tq-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerComponent {}
