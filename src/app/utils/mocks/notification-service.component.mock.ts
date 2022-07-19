import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificationDto } from '../../core/dtos/notification';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'tq-notification-service-mock',
  template: '',
})
export class NotificationServiceMockComponent implements OnInit, OnDestroy {
  notification?: NotificationDto;
  notifSub$: Subscription = Subscription.EMPTY;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notifSub$ = this.notificationService.notify().subscribe((res) => {
      this.notification = res;
    });
  }

  ngOnDestroy(): void {
    this.notifSub$.unsubscribe();
  }
}
