import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { TranslateService } from '@ngx-translate/core';
import { TranslationComponent } from '../../../../shared/components/common/translation/translation.component';
import { TranslateMockPipe } from '../../../../utils/mocks/translate.pipe.mock';
import { AnswersComponent } from '../answers/answers.component';
import { QuestionComponent } from '../question/question.component';
import { TimerComponent } from '../timer/timer.component';
import { RiddleComponent } from './riddle.component';

describe('RiddleComponent', () => {
  let spec: Spectator<RiddleComponent>;
  const createComponent = createComponentFactory({
    component: RiddleComponent,
    declarations: [
      TranslateMockPipe,
      TranslationComponent,
      QuestionComponent,
      TimerComponent,
      AnswersComponent,
    ],
    mocks: [TranslateService],
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

  it('should by default render button with confirm text', () => {
    const button = spec.query('[data-testid-button]');

    expect(button).toHaveText('quizzes.confirm');
  });

  it('should call confirm and calcPoints methods alongside check on button click', () => {
    const button = spec.query('[data-testid-button]');
    const checkSpy = jest.spyOn(spec.component, 'check');
    const confirmSpy = jest.spyOn(spec.component, 'confirm');
    const calcPointsSpy = jest.spyOn(spec.component, 'calcPoints');

    spec.click(button!);
    spec.detectChanges();

    expect(checkSpy).toHaveBeenCalledTimes(1);
    expect(confirmSpy).toHaveBeenCalledTimes(1);
    expect(calcPointsSpy).toHaveBeenCalledTimes(1);
  });

  it('should change button text on button click', () => {
    const button = spec.query('[data-testid-button]');

    spec.click(button!);
    spec.detectChanges();

    expect(button).not.toHaveText('quizzes.confirm');
    expect(button).toHaveText('quizzes.next');
  });

  it('should call first check method and then next method on twice button click', () => {
    const button = spec.query('[data-testid-button]');
    const checkSpy = jest.spyOn(spec.component, 'check');
    const nextSpy = jest.spyOn(spec.component, 'next');

    spec.click(button!);
    spec.detectChanges();

    expect(checkSpy).toHaveBeenCalledTimes(1);
    expect(nextSpy).toHaveBeenCalledTimes(0);

    spec.click(button!);
    spec.detectChanges();

    expect(checkSpy).toHaveBeenCalledTimes(1);
    expect(nextSpy).toHaveBeenCalledTimes(1);
  });

  it('should emit onNext after second button click', () => {
    const button = spec.query('[data-testid-button]');
    const onNextSpy = jest.spyOn(spec.component.onNext, 'emit');

    spec.click(button!);
    spec.detectChanges();

    expect(onNextSpy).toHaveBeenCalledTimes(0);

    spec.click(button!);
    spec.detectChanges();

    expect(onNextSpy).toHaveBeenCalledTimes(1);
  });
});
