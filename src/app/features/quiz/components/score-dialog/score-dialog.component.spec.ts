import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { TranslateMockPipe } from '../../../../utils/mocks/translate.pipe.mock';
import { ScoreDialogComponent } from './score-dialog.component';

describe('ScoreDialogComponent', () => {
  let spec: Spectator<ScoreDialogComponent>;
  const createComponent = createComponentFactory({
    component: ScoreDialogComponent,
    declarations: [TranslateMockPipe],
    detectChanges: false,
  });

  beforeEach(() => {
    spec = createComponent();
    spec.detectChanges();
  });

  it('should create component', () => {
    expect(spec.component).toBeTruthy();
  });

  it('should display quiz score', () => {
    spec.setInput('score', 15);
    spec.setInput('maxScore', 30);
    spec.detectChanges();

    const score = spec.query('[data-testid-score]');

    expect(score).toHaveText('15 / 30');
  });

  it('should display quiz score percentage', () => {
    spec.setInput('scorePercentage', 75);
    spec.detectChanges();

    const score = spec.query('[data-testid-percentage]');

    expect(score).toHaveText('75 %');
  });

  it('should call onClose method on times click', () => {
    const closeSpy = jest.spyOn(spec.component, 'onClose');

    const times = spec.query('[data-testid-times]');

    spec.click(times!);

    expect(closeSpy).toHaveBeenCalledTimes(1);
  });

  it('should call onClose method on close button click', () => {
    const closeSpy = jest.spyOn(spec.component, 'onClose');

    const close = spec.query('[data-testid-close]');

    spec.click(close!);

    expect(closeSpy).toHaveBeenCalledTimes(1);
  });

  it('should call onClose method on keyboard escape press', () => {
    const closeSpy = jest.spyOn(spec.component, 'onClose');

    const dialog = spec.query('[data-testid-dialog]')!;

    spec.dispatchKeyboardEvent(dialog, 'keydown', 'Escape');
    spec.detectChanges();

    expect(closeSpy).toHaveBeenCalledTimes(1);
  });
});
