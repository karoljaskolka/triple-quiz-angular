import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TextInputComponent } from './text-input.component';

describe('TextInputComponent', () => {
  let component: TextInputComponent;
  let fixture: ComponentFixture<TextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextInputComponent);
    component = fixture.componentInstance;
    component.label = 'Label';
    component.mandatory = true;
    component.value = 'SomeValue';
    component.placeholder = 'SomePlaceholder';
    component.type = 'password';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event on input', async () => {
    const input = fixture.debugElement.query(By.css('[data-testid-input]'));

    const onChangeSpy = jest.spyOn(component, 'onChange');

    input.triggerEventHandler('input', { target: { value: 'NewValue' } });

    fixture.detectChanges();

    expect(onChangeSpy).toHaveBeenCalled();
    expect(onChangeSpy).toHaveBeenCalledWith({ target: { value: 'NewValue' } });
  });

  it('should render label text passed as prop', async () => {
    const labelSpan = fixture.debugElement.query(
      By.css('[data-testid-label-span]')
    )?.nativeElement as HTMLSpanElement;

    expect(labelSpan.textContent).toMatch('Label');
  });

  it('should render asterisk when mandatory passed as prop', async () => {
    const labelAsterisk = fixture.debugElement.query(
      By.css('[data-testid-label-asterisk]')
    )?.nativeElement as HTMLSpanElement;

    expect(labelAsterisk.textContent).toMatch('*');
  });

  it('should set input value when passed as prop', async () => {
    const input = fixture.debugElement.query(By.css('[data-testid-input]'))
      ?.nativeElement as HTMLInputElement;

    expect(input.value).toMatch('SomeValue');
  });

  it('should set input type when passed as prop', async () => {
    const input = fixture.debugElement.query(By.css('[data-testid-input]'))
      ?.nativeElement as HTMLInputElement;

    expect(input.type).toMatch('password');
  });

  it('should set input placeholder when passed as prop', async () => {
    const input = fixture.debugElement.query(By.css('[data-testid-input]'))
      ?.nativeElement as HTMLInputElement;

    expect(input.placeholder).toMatch('SomePlaceholder');
  });
});
