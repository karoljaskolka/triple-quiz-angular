import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NotificationDto } from '../dtos/notification';
import { NotificationType } from '../types/notification-type';

let UNIQUE_ID = 1;

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notification$ = new Subject<NotificationDto>();

  error(message: string, delay: number = 2000) {
    this.pushNotification(message, delay, NotificationType.Error);
  }

  success(message: string, delay: number = 2000) {
    this.pushNotification(message, delay, NotificationType.Success);
  }

  warning(message: string, delay: number = 2000) {
    this.pushNotification(message, delay, NotificationType.Warning);
  }

  private pushNotification(
    message: string,
    delay: number,
    type: NotificationType
  ) {
    this.next({
      id: 'tq-notification-' + UNIQUE_ID++,
      message,
      delay,
      type,
    } as NotificationDto);
  }

  private next(notification: NotificationDto) {
    this.notification$.next(notification);
  }

  notify() {
    return this.notification$.asObservable();
  }
}
