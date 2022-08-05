import { Spectator, createHostFactory } from '@ngneat/spectator/jest';
import { SpinnerComponent } from '../spinner/spinner.component';
import { AnchorComponent, ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let spec: Spectator<ButtonComponent>;
  const createHost = createHostFactory({
    component: ButtonComponent,
    declarations: [SpinnerComponent],
  });

  it('should create component', () => {
    spec = createHost(`<button tqBtn>Confirm</button>`);

    expect(spec.component).toBeTruthy();
  });

  it('should render <ng-content> content', () => {
    spec = createHost(`<button tqBtn>Confirm</button>`);

    const content = spec.query('[data-testid-content]');

    expect(content).toHaveText('Confirm');
  });

  it('should not render spinner', () => {
    spec = createHost(`<button tqBtn>Confirm</button>`);

    const spinner = spec.query('[data-testid-spinner]');

    expect(spinner).toBeFalsy();
  });

  it('should not render <ng-content> content', () => {
    spec = createHost(`<button tqBtn [loading]="true">Confirm</button>`);

    const content = spec.query('[data-testid-content]');

    expect(content).toBeFalsy();
  });

  it('should render spinner', () => {
    spec = createHost(`<button tqBtn [loading]="true">Confirm</button>`);

    const spinner = spec.query('[data-testid-spinner]');

    expect(spinner).toBeTruthy();
  });

  it('should have correct background class', () => {
    spec = createHost(
      `<button tqBtn color="secondary" text="complementary">Confirm</button>`
    );

    const btn = spec.debugElement.nativeElement;

    expect(btn).toHaveClass('bg-secondary');
  });

  it('should have correct text class', () => {
    spec = createHost(
      `<button tqBtn color="secondary" text="complementary">Confirm</button>`
    );

    const btn = spec.debugElement.nativeElement;

    expect(btn).toHaveClass('text-complementary');
  });

  it('should have disabled attribute', () => {
    spec = createHost(`<button tqBtn [disabled]="true">Confirm</button>`);

    const btn = spec.debugElement.nativeElement;

    expect(btn).toHaveAttribute('disabled');
  });
});

describe('ButtonComponent - Outline', () => {
  let spec: Spectator<ButtonComponent>;
  const createHost = createHostFactory({
    component: ButtonComponent,
    declarations: [SpinnerComponent],
  });

  it('should have correct background class', () => {
    spec = createHost(
      `<button tqBtn [outline]="true" color="secondary" text="complementary">Confirm</button>`
    );

    const btn = spec.debugElement.nativeElement;

    expect(btn).toHaveClass('bg-transparent');
  });

  it('should have correct text class', () => {
    spec = createHost(
      `<button tqBtn [outline]="true" color="secondary" text="complementary">Confirm</button>`
    );

    const btn = spec.debugElement.nativeElement;

    expect(btn).toHaveClass('text-secondary');
  });

  it('should have correct border classes', () => {
    spec = createHost(
      `<button tqBtn [outline]="true" color="secondary" text="complementary">Confirm</button>`
    );

    const btn = spec.debugElement.nativeElement;

    expect(btn).toHaveClass('border-secondary');
    expect(btn).toHaveClass('border-2');
  });
});

describe('AnchorComponent', () => {
  let spec: Spectator<AnchorComponent>;
  const createHost = createHostFactory({
    component: AnchorComponent,
    declarations: [SpinnerComponent],
  });

  it('should create component', () => {
    spec = createHost(`<a tqBtn>Confirm</a>`);

    expect(spec.component).toBeTruthy();
  });

  it('should have tabindex attribute equal -1', () => {
    spec = createHost(`<a tqBtn [disabled]="true">Confirm</a>`);

    const a = spec.debugElement.nativeElement;

    expect(a).toHaveAttribute('tabindex', '-1');
  });

  it('should have tabindex attribute equal 0', () => {
    spec = createHost(`<a tqBtn [disabled]="false">Confirm</a>`);

    const a = spec.debugElement.nativeElement;

    expect(a).toHaveAttribute('tabindex', '0');
  });
});
