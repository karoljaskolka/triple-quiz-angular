import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NotificationDto } from '../../../../core/dtos/notification';

@Component({
  selector: 'tq-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent {
  @Input() notification?: NotificationDto;

  @Output() close = new EventEmitter<string>();

  onClose() {
    if (this.notification) this.close.emit(this.notification.id);
  }
}
