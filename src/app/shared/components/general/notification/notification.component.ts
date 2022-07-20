import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NotificationDto } from '../../../../core/dtos/notification';

@Component({
  selector: 'tq-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent {
  @Input() notification?: NotificationDto;
}
