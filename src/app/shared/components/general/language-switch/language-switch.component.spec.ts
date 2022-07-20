import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { TranslateService } from '@ngx-translate/core';
import { LanguageSwitchComponent } from './language-switch.component';

describe('LanguageSwitchComponent', () => {
  let spec: Spectator<LanguageSwitchComponent>;
  const createComponent = createComponentFactory({
    component: LanguageSwitchComponent,
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

  it('should create button element', () => {
    const button = spec.query('button');

    expect(button).toBeTruthy();
  });
});
