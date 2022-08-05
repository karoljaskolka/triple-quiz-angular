import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { TranslationComponent } from '../../../../shared/components/common/translation/translation.component';
import { AnswerComponent } from '../answer/answer.component';
import { AnswersComponent } from './answers.component';
import { TranslateService } from '@ngx-translate/core';

describe('AnswersComponent', () => {
  let spec: Spectator<AnswersComponent>;
  const createComponent = createComponentFactory({
    component: AnswersComponent,
    declarations: [AnswerComponent, TranslationComponent],
    mocks: [TranslateService],
    detectChanges: false,
  });

  beforeEach(() => {
    spec = createComponent();
    spec.detectChanges();
  });

  it('should create component', () => {
    expect(spec.component).toBeTruthy();
  });

  it('should render four answers', () => {
    const answers = spec.queryAll(AnswerComponent);

    expect(answers).toHaveLength(4);
  });

  it('should call onCheck on answer check emit', () => {
    const answer = spec.query(AnswerComponent);
    const checkSpy = jest.spyOn(spec.component, 'onCheck');

    answer?.onAnswerCheck.emit();

    spec.detectChanges();

    expect(checkSpy).toBeCalledTimes(1);
  });

  it('should return correct answer name from getProperty based on index', () => {
    expect(spec.component.getProperty(0)).toEqual('answerA');
    expect(spec.component.getProperty(1)).toEqual('answerB');
    expect(spec.component.getProperty(2)).toEqual('answerC');
    expect(spec.component.getProperty(3)).toEqual('answerD');
  });
});
