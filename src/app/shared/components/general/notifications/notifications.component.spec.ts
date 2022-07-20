import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { TranslateMockPipe } from '../../../../utils/mocks/translate.pipe.mock';
import { NotificationDto } from '../../../../core/dtos/notification';
import { NotificationType } from '../../../../core/types/notification-type';
import { NotificationsComponent } from './notifications.component';

describe('NotificationComponent', () => {
  let component: Spectator<NotificationsComponent>;
  const createComponent = createComponentFactory({
    component: NotificationsComponent,
    shallow: true,
    detectChanges: false,
  });

  beforeEach(() => {
    component = createComponent();
    component.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should render tq-notification components', () => {
    component.setInput('notifications', [{}, {}] as NotificationDto[]);

    const notifications = component.queryAll('tq-notification');

    expect(notifications).toHaveLength(2);
  });

  it('should not render div when notifications are empty array', () => {
    component.setInput('notifications', [] as NotificationDto[]);

    const div = component.query('[data-testid-notifications]');

    expect(div).toBeFalsy();
  });
});
