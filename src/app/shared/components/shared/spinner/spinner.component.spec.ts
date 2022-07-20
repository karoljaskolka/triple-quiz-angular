import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { SpinnerComponent } from './spinner.component';

describe('SpinnerComponent', () => {
  let spec: Spectator<SpinnerComponent>;
  const createComponent = createComponentFactory({
    component: SpinnerComponent,
    detectChanges: false,
  });

  beforeEach(() => {
    spec = createComponent();
    spec.detectChanges();
  });

  it('should create component', () => {
    expect(spec.component).toBeTruthy();
  });

  it('should create spinner with default sm classes', () => {
    const spinner = spec.query('[data-testid-spinner]');

    expect(spinner).toHaveClass('w-6');
    expect(spinner).toHaveClass('h-6');
    expect(spinner).toHaveClass('border-4');
  });

  it('should create spinner with default color classes', () => {
    const spinner = spec.query('[data-testid-spinner]');

    expect(spinner).toHaveClass('border-secondary');
    expect(spinner).toHaveClass('border-t-complementary');
  });

  it('should create spinner with lg classes', () => {
    spec.setInput('size', 'lg');

    const spinner = spec.query('[data-testid-spinner]');

    expect(spinner).toHaveClass('w-12');
    expect(spinner).toHaveClass('h-12');
    expect(spinner).toHaveClass('border-8');
  });

  it('should create spinner with reverse color classes', () => {
    spec.setInput('reverse', true);

    const spinner = spec.query('[data-testid-spinner]');

    expect(spinner).toHaveClass('border-complementary');
    expect(spinner).toHaveClass('border-t-secondary');
  });
});
