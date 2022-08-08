import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { TranslateService } from '@ngx-translate/core';
import { QuizDto } from '../../../../core/dtos';
import { AnchorComponent } from '../../../../shared/components/common/button/button.component';
import { TranslationComponent } from '../../../../shared/components/common/translation/translation.component';
import { TranslateMockPipe } from '../../../../utils/mocks/translate.pipe.mock';
import { QuizItemComponent } from './quiz-item.component';

describe('QuizItemComponent', () => {
  let spec: Spectator<QuizItemComponent>;
  const createComponent = createComponentFactory({
    component: QuizItemComponent,
    declarations: [TranslateMockPipe, TranslationComponent, AnchorComponent],
    mocks: [TranslateService],
    imports: [RouterTestingModule, FontAwesomeModule],
    detectChanges: false,
  });

  beforeEach(() => {
    spec = createComponent();
    spec.setInput('quiz', { id: '123' } as QuizDto);
    spec.detectChanges();
  });

  it('should create component', () => {
    expect(spec.component).toBeTruthy();
  });

  it('should render two translation components', () => {
    const translations = spec.queryAll(TranslationComponent);

    expect(translations).toHaveLength(2);
  });

  it('should render play anchor element with href to /quizzes/123', () => {
    const play = spec.query('[data-testid-play]');

    expect(play).toHaveAttribute('href', '/quizzes/123');
  });

  it('should render play anchor element with href to /scores/123', () => {
    const scores = spec.query('[data-testid-scores]');

    expect(scores).toHaveAttribute('href', '/scores/123');
  });
});
