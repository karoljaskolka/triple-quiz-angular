import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { TimelineComponent } from './timeline.component';

describe('TimelineComponent', () => {
  let spec: Spectator<TimelineComponent>;
  const createComponent = createComponentFactory({
    component: TimelineComponent,
    detectChanges: false,
  });

  beforeEach(() => {
    spec = createComponent();
    spec.detectChanges();
  });

  it('should create component', () => {
    expect(spec.component).toBeTruthy();
  });

  it('should render 6 circles when total equals 5', () => {
    spec.setInput('total', 5);
    spec.detectChanges();

    const circles = spec.queryAll('[data-testid-circle]');

    expect(circles).toHaveLength(6);
  });

  it('should render 2 filled circles and 4 not filled when currentIndex is 2 and total is 5', () => {
    spec.setInput('total', 5);
    spec.setInput('currentIndex', 2);
    spec.detectChanges();

    const circlesFilled = spec.queryAll('[data-testid-circle].bg-tertiary');
    const circlesNotFilled = spec.queryAll('[data-testid-circle].bg-gray');

    expect(circlesFilled).toHaveLength(2);
    expect(circlesNotFilled).toHaveLength(4);
  });

  it('should render progress with 40% width when currentIndex is 2 and total is 5', () => {
    spec.setInput('total', 5);
    spec.setInput('currentIndex', 2);
    spec.detectChanges();

    const progress = spec.query('[data-testid-progress]');

    expect(progress).toHaveStyle({ width: '40%' });
  });
});
