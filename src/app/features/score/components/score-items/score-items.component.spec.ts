import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { ScoreItemsComponent } from './score-items.component';
import { ScoreDto } from '../../../../core/dtos/score';
import { TranslateMockPipe } from '../../../../utils/mocks/translate.pipe.mock';

describe('ScoreItemsComponent', () => {
  let spec: Spectator<ScoreItemsComponent>;
  const createComponent = createComponentFactory({
    component: ScoreItemsComponent,
    declarations: [TranslateMockPipe],
    detectChanges: false,
    shallow: true,
  });

  beforeEach(() => {
    spec = createComponent();
    spec.detectChanges();
  });

  it('should create component', () => {
    expect(spec.component).toBeTruthy();
  });

  it('should render no scores banner when scores are empty array', () => {
    spec.setInput('scores', []);
    spec.detectChanges();

    const noScores = spec.query('[data-testid-no-scores]');

    expect(noScores).toBeTruthy();
  });

  it('should render three tq-score-item instead of no score banner', () => {
    spec.setInput('scores', [{}, {}, {}] as ScoreDto[]);
    spec.detectChanges();

    const items = spec.queryAll('tq-score-item');
    const noScores = spec.query('[data-testid-no-scores]');

    expect(noScores).not.toBeTruthy();
    expect(items).toHaveLength(3);
  });
});
