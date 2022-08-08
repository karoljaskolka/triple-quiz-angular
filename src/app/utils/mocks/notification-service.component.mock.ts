import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificationDto } from '../../core/dtos';
import { NotificationService } from '../../core/services';

@Component({
  selector: 'tq-notification-service-mock',
  template: '',
})
export class NotificationServiceMockComponent implements OnInit, OnDestroy {
  notification?: NotificationDto;
  notifSub$: Subscription = Subscription.EMPTY;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notifSub$ = this.notificationService.notification$.subscribe((res) => {
      this.notification = res;
    });
  }

  ngOnDestroy(): void {
    this.notifSub$.unsubscribe();
  }
}
