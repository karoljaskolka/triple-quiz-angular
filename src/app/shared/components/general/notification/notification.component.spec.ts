import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { TranslateMockPipe } from '../../../../utils/mocks/translate.pipe.mock';
import { NotificationDto } from '../../../../core/dtos/notification';
import { NotificationType } from '../../../../core/types/notification-type';
import { NotificationComponent } from './notification.component';

describe('NotificationComponent', () => {
  let spec: Spectator<NotificationComponent>;
  const createComponent = createComponentFactory({
    component: NotificationComponent,
    declarations: [TranslateMockPipe],
    detectChanges: false,
  });

  beforeEach(() => {
    spec = createComponent();
    spec.detectChanges();
  });

  it('should create component', () => {
    expect(spec.component).toBeTruthy();
  });

  it('should render error message', () => {
    spec.setInput('notification', {
      message: 'error-message',
      type: NotificationType.Error,
    } as NotificationDto);

    const div = spec.query('[data-testid-notification]');

    expect(div).toHaveText('error-message');
    expect(div).toHaveClass('bg-red');
    expect(div).toHaveClass('border-red');
  });

  it('should render success message', () => {
    spec.setInput('notification', {
      message: 'success-message',
      type: NotificationType.Success,
    } as NotificationDto);

    const div = spec.query('[data-testid-notification]');

    expect(div).toHaveText('success-message');
    expect(div).toHaveClass('bg-green');
    expect(div).toHaveClass('border-green');
  });

  it('should render warning message', () => {
    spec.setInput('notification', {
      message: 'warning-message',
      type: NotificationType.Warning,
    } as NotificationDto);

    const div = spec.query('[data-testid-notification]');

    expect(div).toHaveText('warning-message');
    expect(div).toHaveClass('bg-tertiary');
    expect(div).toHaveClass('border-tertiary');
  });

  it('should handle notification without message', () => {
    spec.setInput('notification', {} as NotificationDto);

    const div = spec.query('[data-testid-notification]');

    expect(div).toHaveText('error.unknown');
  });
});
