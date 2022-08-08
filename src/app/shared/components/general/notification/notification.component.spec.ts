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

    const button = spec.query('button[data-testid-notification]');

    expect(button).toHaveText('error-message');
    expect(button).toHaveClass('bg-red');
    expect(button).toHaveClass('border-red');
  });

  it('should render success message', () => {
    spec.setInput('notification', {
      message: 'success-message',
      type: NotificationType.Success,
    } as NotificationDto);

    const button = spec.query('button[data-testid-notification]');

    expect(button).toHaveText('success-message');
    expect(button).toHaveClass('bg-green');
    expect(button).toHaveClass('border-green');
  });

  it('should render warning message', () => {
    spec.setInput('notification', {
      message: 'warning-message',
      type: NotificationType.Warning,
    } as NotificationDto);

    const button = spec.query('button[data-testid-notification]');

    expect(button).toHaveText('warning-message');
    expect(button).toHaveClass('bg-tertiary');
    expect(button).toHaveClass('border-tertiary');
  });

  it('should handle notification without message', () => {
    spec.setInput('notification', {} as NotificationDto);

    const button = spec.query('button[data-testid-notification]');

    expect(button).toHaveText('error.unknown');
  });

  it('should emit close on notification click', () => {
    spec.setInput('notification', {} as NotificationDto);

    const button = spec.query('button[data-testid-notification]');
    const closeSpy = jest.spyOn(spec.component.close, 'emit');

    spec.click(button!);
    spec.detectChanges();

    expect(closeSpy).toHaveBeenCalledTimes(1);
  });
});
