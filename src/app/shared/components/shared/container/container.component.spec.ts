import { Spectator, createHostFactory } from '@ngneat/spectator/jest';
import { ContainerComponent } from './container.component';

describe('ContainerComponent', () => {
  let spec: Spectator<ContainerComponent>;
  const createHost = createHostFactory({
    component: ContainerComponent,
    detectChanges: false,
  });

  beforeEach(() => {
    spec = createHost('<tq-container>Content</tq-container>');
    spec.detectChanges();
  });

  it('should create component', () => {
    expect(spec.component).toBeTruthy();
  });

  it('should create html element', () => {
    const container = spec.query('[data-testid-container]');

    expect(container).toBeTruthy();
  });

  it('should render <ng-content> content', () => {
    const container = spec.query('[data-testid-container]');

    expect(container).toHaveText('Content');
  });
});
