import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { TranslateMockPipe } from '../../../../utils/mocks/translate.pipe.mock';
import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  let spec: Spectator<NotFoundComponent>;
  const createComponent = createComponentFactory({
    component: NotFoundComponent,
    declarations: [TranslateMockPipe],
    imports: [FontAwesomeModule],
    detectChanges: false,
  });

  beforeEach(() => {
    spec = createComponent();
    spec.detectChanges();
  });

  it('should create component', () => {
    expect(spec.component).toBeTruthy();
  });

  it('should render heading with not found text', () => {
    const h1 = spec.query('h1');

    expect(h1).toHaveText('error.page-not-found');
  });
});
