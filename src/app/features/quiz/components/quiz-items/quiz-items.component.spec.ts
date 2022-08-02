import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { QuizItemsComponent } from './quiz-items.component';
import { QuizDto } from '../../../../core/dtos/quiz';

describe('QuizItemsComponent', () => {
  let spec: Spectator<QuizItemsComponent>;
  const createComponent = createComponentFactory({
    component: QuizItemsComponent,
    detectChanges: false,
    shallow: true,
  });

  beforeEach(() => {
    spec = createComponent();
    spec.setInput('quizzes', [{}, {}, {}] as QuizDto[]);
    spec.detectChanges();
  });

  it('should create component', () => {
    expect(spec.component).toBeTruthy();
  });

  it('should render three tq-quiz-item', () => {
    const items = spec.queryAll('tq-quiz-item');

    expect(items).toHaveLength(3);
  });
});
