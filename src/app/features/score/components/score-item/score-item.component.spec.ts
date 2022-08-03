import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { ScoreItemComponent } from './score-item.component';
import { TranslateMockPipe } from '../../../../utils/mocks/translate.pipe.mock';
import { UserDto } from '../../../../core/dtos/user';
import { ScoreDto } from '../../../../core/dtos/score';

describe('ScoreItemComponent', () => {
  let spec: Spectator<ScoreItemComponent>;
  const createComponent = createComponentFactory({
    component: ScoreItemComponent,
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

  it('should d1isplay informations about score', () => {
    spec.setInput('score', {
      score: 75,
      User: {
        login: 'JohnDoe',
      } as UserDto,
      createdAt: '2022-12-30T15:30:00.000Z',
    } as ScoreDto);

    const login = spec.query('[data-testid-login]');
    const score = spec.query('[data-testid-score]');
    const time = spec.query('[data-testid-time]');

    expect(login).toHaveText('JohnDoe');
    expect(score).toHaveText('75 %');
    expect(time).toHaveText('30-12-22');
  });

  it('should display award with gold background when index equals 1', () => {
    spec.setInput('index', 1);

    const award = spec.query('[data-testid-award]');

    expect(award).toHaveClass('text-gold');
  });

  it('should display award with silver background when index equals 2', () => {
    spec.setInput('index', 2);

    const award = spec.query('[data-testid-award]');

    expect(award).toHaveClass('text-silver');
  });

  it('should display award with bronze background when index equals 3', () => {
    spec.setInput('index', 3);

    const award = spec.query('[data-testid-award]');

    expect(award).toHaveClass('text-bronze');
  });

  it('should display number when index is equal or bigger 4', () => {
    spec.setInput('index', 4);

    const award = spec.query('[data-testid-index]');

    expect(award).toHaveText('# 4');
  });
});
