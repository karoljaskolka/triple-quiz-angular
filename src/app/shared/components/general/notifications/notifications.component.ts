import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { uuid } from '../../../../core/types/uuid';
import { NotificationDto } from '../../../../core/dtos/notification';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'tq-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsComponent implements OnInit {
  notifications: NotificationDto[] = [];
  notificationsSub$: Subscription = Subscription.EMPTY;

  constructor(
    private notificationService: NotificationService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.notificationService.notification$.subscribe((notification) => {
      this.notifications.push(notification);
      this.delayDestroy(notification);
      this.cdRef.markForCheck();
    });
  }

  private delayDestroy(notification: NotificationDto) {
    setTimeout(() => {
      this.notifications = this.notifications.filter(
        (n) => n.id !== notification.id
      );
      this.cdRef.markForCheck();
    }, notification.delay);
  }

  ngOnDestroy() {
    this.notificationsSub$.unsubscribe();
  }

  trackById(index: number, item: NotificationDto): uuid {
    return item.id;
  }
}
