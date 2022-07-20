import { ReactiveFormsModule } from '@angular/forms';
import { SpectatorHost, createHostFactory } from '@ngneat/spectator/jest';
import { HostControlMockComponent } from '../../../../utils/mocks/host-control.component.mock';
import { TextInputComponent } from './text-input.component';

describe('TextInputComponent', () => {
  let spec: SpectatorHost<TextInputComponent, HostControlMockComponent>;
  const createHost = createHostFactory({
    component: TextInputComponent,
    imports: [ReactiveFormsModule],
    detectChanges: false,
    host: HostControlMockComponent,
  });

  beforeEach(() => {
    spec = createHost(`
      <tq-text-input
        [formControl]="control"
        [mandatory]="true"
        type="password"
        label="ControlLabel"
        placeholder="ControlPlaceholder"
      ></tq-text-input>
    `);
    spec.detectChanges();
  });

  it('should create component', () => {
    expect(spec.component).toBeTruthy();
  });

  it('should emit event on input and update host control', async () => {
    const input = spec.query('[data-testid-input]') as Element;
    const onChangeSpy = jest.spyOn(spec.component, 'onChange');

    spec.typeInElement('NewValue', input);
    spec.detectChanges();

    expect(onChangeSpy).toHaveBeenCalled();
    expect(spec.hostComponent.control.value).toEqual('NewValue');
  });

  it('should render label text passed as prop', async () => {
    const labelSpan = spec.query('[data-testid-label-span]');

    expect(labelSpan).toHaveText('ControlLabel');
  });

  it('should render asterisk when mandatory passed as prop', async () => {
    const labelAsterisk = spec.query('[data-testid-label-asterisk]');

    expect(labelAsterisk).toHaveText('*');
  });

  it('should set component value as given', async () => {
    spec.component.writeValue('ControlWriteValue');
    spec.detectChanges();

    expect(spec.component.value).toEqual('ControlWriteValue');
  });

  it('should set component value as null', async () => {
    spec.component.writeValue(null);
    spec.detectChanges();

    expect(spec.component.value).toEqual(null);
  });

  it('should set input type when passed as prop', async () => {
    const input = spec.query('[data-testid-input]');

    expect(input).toHaveAttribute('type', 'password');
  });

  it('should set input placeholder when passed as prop', async () => {
    const input = spec.query('[data-testid-input]');

    expect(input).toHaveAttribute('placeholder', 'ControlPlaceholder');
  });
});
