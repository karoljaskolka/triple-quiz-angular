import { Spectator, createHostFactory } from '@ngneat/spectator/jest';
import { FormTitleComponent } from './form-title.component';

describe('FormTitleComponent', () => {
  let spec: Spectator<FormTitleComponent>;
  const createHost = createHostFactory({
    component: FormTitleComponent,
    detectChanges: false,
  });

  beforeEach(() => {
    spec = createHost('<tq-form-title>FORM TITLE</tq-form-title>');
    spec.detectChanges();
  });

  it('should create component', () => {
    expect(spec.component).toBeTruthy();
  });

  it('should create h1 element', () => {
    const h1 = spec.query('h1');

    expect(h1).toBeTruthy();
  });

  it('should render <ng-content> content', () => {
    const title = spec.query('[data-testid-form-title]');

    expect(title).toHaveText('FORM TITLE');
  });
});
