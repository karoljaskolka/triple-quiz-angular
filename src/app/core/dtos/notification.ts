import { NotificationType } from '../types/notification-type';

export interface NotificationDto {
  id: string;
  message: string;
  type: NotificationType;
  delay: number;
}
