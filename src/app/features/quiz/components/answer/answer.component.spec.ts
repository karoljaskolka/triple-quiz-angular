import { Spectator, createHostFactory } from '@ngneat/spectator/jest';
import { AnswerComponent } from './answer.component';

describe('AnswerComponent', () => {
  let spec: Spectator<AnswerComponent>;
  const createHost = createHostFactory({
    component: AnswerComponent,
  });

  it('should create component', () => {
    spec = createHost(`<tq-answer>Option #1</tq-answer>`);

    expect(spec.component).toBeTruthy();
  });

  it('should render <ng-content> content', () => {
    spec = createHost(`<tq-answer>Option #1</tq-answer>`);

    const answer = spec.query('[data-testid-answer]');

    expect(answer).toHaveText('Option #1');
  });

  it('should have default background styling', () => {
    spec = createHost(`<tq-answer>Confirm</tq-answer>`);

    const answer = spec.query('[data-testid-answer]');

    expect(answer).toHaveClass('bg-secondary');
  });

  it('should have checked background styling', () => {
    spec = createHost(`<tq-answer [checked]="true">Confirm</tq-answer>`);

    const answer = spec.query('[data-testid-answer]');

    expect(answer).not.toHaveClass('bg-secondary');
    expect(answer).toHaveClass('bg-gray');
  });

  it("should have 'correct' background styling", () => {
    spec = createHost(`<tq-answer [correct]="true">Confirm</tq-answer>`);

    const answer = spec.query('[data-testid-answer]');

    expect(answer).not.toHaveClass('bg-secondary');
    expect(answer).toHaveClass('bg-green');
  });

  it("should have 'incorrect' background styling", () => {
    spec = createHost(`<tq-answer [incorrect]="true">Confirm</tq-answer>`);

    const answer = spec.query('[data-testid-answer]');

    expect(answer).not.toHaveClass('bg-secondary');
    expect(answer).toHaveClass('bg-red');
  });

  it('should have disabled attribute', () => {
    spec = createHost(`<tq-answer [disabled]="true">Confirm</tq-answer>`);

    const answer = spec.query('[data-testid-answer]');

    expect(answer).toHaveAttribute('disabled');
  });

  it('should have not-allowed cursor styling', () => {
    spec = createHost(`<tq-answer [disabled]="true">Confirm</tq-answer>`);

    const answer = spec.query('[data-testid-answer]');

    expect(answer).toHaveClass('cursor-not-allowed');
  });

  it('should emit event on button click', () => {
    spec = createHost(`<tq-answer>Confirm</tq-answer>`);

    const answer = spec.query('[data-testid-answer]');
    const clickSpy = jest.spyOn(spec.component.onAnswerCheck, 'emit');

    spec.click(answer!);

    expect(clickSpy).toHaveBeenCalledTimes(1);
  });
});
