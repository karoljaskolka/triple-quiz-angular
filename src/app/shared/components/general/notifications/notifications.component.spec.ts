import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { NotificationDto } from '../../../../core/dtos/notification';
import { NotificationsComponent } from './notifications.component';

describe('NotificationsComponent', () => {
  let spec: Spectator<NotificationsComponent>;
  const createComponent = createComponentFactory({
    component: NotificationsComponent,
    shallow: true,
    detectChanges: false,
  });

  beforeEach(() => {
    spec = createComponent();
    spec.detectChanges();
  });

  it('should create component', () => {
    expect(spec.component).toBeTruthy();
  });

  it('should render tq-notification components', () => {
    spec.setInput('notifications', [{}, {}] as NotificationDto[]);

    const notifications = spec.queryAll('tq-notification');

    expect(notifications).toHaveLength(2);
  });

  it('should not render div when notifications are empty array', () => {
    spec.setInput('notifications', [] as NotificationDto[]);

    const div = spec.query('[data-testid-notifications]');

    expect(div).toBeFalsy();
  });
});
