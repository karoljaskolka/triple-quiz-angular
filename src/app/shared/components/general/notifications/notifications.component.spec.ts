import {
  Spectator,
  createComponentFactory,
  mockProvider,
} from '@ngneat/spectator/jest';
import { NotificationService } from '../../../../core/services/notification.service';
import { NotificationsComponent } from './notifications.component';
import { of } from 'rxjs';
import { NotificationType } from '../../../../core/types/notification-type';

const NotificationMockService = {
  notification$: of({
    id: '1',
    message: 'Error',
    type: NotificationType.Error,
    delay: 1000,
  }),
};

describe('NotificationsComponent', () => {
  let spec: Spectator<NotificationsComponent>;
  const createComponent = createComponentFactory({
    component: NotificationsComponent,
    providers: [mockProvider(NotificationService, NotificationMockService)],
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
    const notifications = spec.queryAll('tq-notification');

    expect(notifications).toHaveLength(1);
  });
});

describe('NotificationsComponent - EMPTY', () => {
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

  it('should not render div when notifications are empty array', () => {
    const div = spec.query('[data-testid-notifications]');

    expect(div).toBeFalsy();
  });
});
