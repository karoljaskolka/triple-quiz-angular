import { Spectator, createHostFactory } from '@ngneat/spectator/jest';
import { QuestionComponent } from './question.component';

describe('QuestionComponent', () => {
  let spec: Spectator<QuestionComponent>;
  const createHost = createHostFactory({
    component: QuestionComponent,
  });

  beforeEach(() => {
    spec = createHost('<tq-question>Question #123</tq-question>');
    spec.detectChanges();
  });

  it('should create component', () => {
    expect(spec.component).toBeTruthy();
  });

  it('should render <ng-content> content', () => {
    const container = spec.query('[data-testid-question ]');

    expect(container).toHaveText('Question #123');
  });
});
