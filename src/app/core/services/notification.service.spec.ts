import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationServiceMockComponent } from '../../utils/mocks/notification-service.component.mock';
import { NotificationType } from '../types/notification-type';

import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;
  let fixture: ComponentFixture<NotificationServiceMockComponent>;
  let componentMock: NotificationServiceMockComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationServiceMockComponent],
    });
    fixture = TestBed.createComponent(NotificationServiceMockComponent);
    componentMock = fixture.componentInstance;
    service = fixture.debugElement.injector.get(NotificationService);
    componentMock.ngOnInit();
  });

  afterEach(() => {
    componentMock.ngOnDestroy();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call error and notify', async () => {
    service.error('error-message');

    expect(componentMock.notification?.message).toEqual('error-message');
    expect(componentMock.notification?.type).toEqual(NotificationType.Error);
  });

  it('should call warning and notify', async () => {
    service.warning('warning-message');

    expect(componentMock.notification?.message).toEqual('warning-message');
    expect(componentMock.notification?.type).toEqual(NotificationType.Warning);
  });

  it('should call success and notify', async () => {
    service.success('success-message');

    expect(componentMock.notification?.message).toEqual('success-message');
    expect(componentMock.notification?.type).toEqual(NotificationType.Success);
  });
});
