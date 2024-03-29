import { RouterTestingModule } from '@angular/router/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { AuthenticatedMockDirective } from '../../../../utils/mocks/authenticated.directive.mock';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let spec: Spectator<HeaderComponent>;
  const createComponent = createComponentFactory({
    component: HeaderComponent,
    declarations: [AuthenticatedMockDirective],
    imports: [RouterTestingModule],
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

  it('should create header element', () => {
    const header = spec.query('header');

    expect(header).toBeTruthy();
  });

  it('should create a element with redirect to /', () => {
    const a = spec.query('a[data-testid-logo]');

    expect(a).toBeTruthy();
    expect(a).toHaveAttribute('href', '/');
  });

  it('should create logo icon', () => {
    const icon = spec.query('a[data-testid-logo] > fa-icon');

    expect(icon).toBeTruthy();
  });

  it('should call logout method', () => {
    const logoutBtn = spec.query('button[data-testid-logout]');
    const logoutSpy = jest.spyOn(spec.component, 'logout');

    spec.click(logoutBtn!);
    spec.detectChanges();

    expect(logoutSpy).toHaveBeenCalledTimes(1);
  });
});
