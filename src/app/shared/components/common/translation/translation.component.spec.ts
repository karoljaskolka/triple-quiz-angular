import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { TranslateService } from '@ngx-translate/core';
import { Locale } from '../../../../core/types';
import { TranslationComponent } from './translation.component';

describe('TranslationComponent', () => {
  let spec: Spectator<TranslationComponent>;
  const createComponent = createComponentFactory({
    component: TranslationComponent,
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

  it('should create html element', () => {
    const span = spec.query('[data-testid-translation]');

    expect(span).toBeTruthy();
  });

  it('should display empty string in span if inputs not set', () => {
    const span = spec.query('[data-testid-translation]');

    expect(span).toHaveText('');
  });

  it('should display translated (EN) property of entity', () => {
    spec.component.lang = Locale.EN;
    spec.setInput('property', 'name');
    spec.setInput('entity', {
      pl: {
        name: 'NamePL',
      },
      en: {
        name: 'NameEN',
      },
    });
    spec.detectChanges();

    const span = spec.query('[data-testid-translation]');
    expect(span).toHaveText('NameEN');
  });

  it('should display translated (PL) property of entity', () => {
    spec.component.lang = Locale.PL;
    spec.setInput('property', 'name');
    spec.setInput('entity', {
      pl: {
        name: 'NamePL',
      },
      en: {
        name: 'NameEN',
      },
    });
    spec.detectChanges();

    const span = spec.query('[data-testid-translation]');
    expect(span).toHaveText('NamePL');
  });
});
