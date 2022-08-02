import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { TimerComponent } from './timer.component';

describe('TimerComponent', () => {
  let spec: Spectator<TimerComponent>;
  const createComponent = createComponentFactory({
    component: TimerComponent,
    detectChanges: false,
  });

  beforeEach(() => {
    spec = createComponent();
    spec.detectChanges();
  });

  it('should create component', () => {
    expect(spec.component).toBeTruthy();
  });

  it('should display counter number', () => {
    spec.setInput('counter', 30);
    spec.detectChanges();

    const counter = spec.query('[data-testid-counter]');

    expect(counter).toHaveText('30');
  });
});
