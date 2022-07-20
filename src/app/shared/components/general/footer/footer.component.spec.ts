import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let spec: Spectator<FooterComponent>;
  const createComponent = createComponentFactory({
    component: FooterComponent,
    detectChanges: false,
  });

  beforeEach(() => {
    spec = createComponent();
    spec.detectChanges();
  });

  it('should create component', () => {
    expect(spec.component).toBeTruthy();
  });

  it('should create footer element', () => {
    const footer = spec.query('footer');

    expect(footer).toBeTruthy();
  });
});
