import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { uuid } from '../../../../core/types';
import { NotificationDto } from '../../../../core/dtos';
import { NotificationService } from '../../../../core/services';

@Component({
  selector: 'tq-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsComponent implements OnInit, OnDestroy {
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

  removeNotification(id: string) {
    this.notifications = this.notifications.filter((n) => n.id !== id);
    this.cdRef.markForCheck();
  }

  private delayDestroy(notification: NotificationDto) {
    setTimeout(() => {
      this.removeNotification(notification.id);
    }, notification.delay);
  }

  ngOnDestroy() {
    this.notificationsSub$.unsubscribe();
  }

  trackById(index: number, item: NotificationDto): uuid {
    return item.id;
  }
}
