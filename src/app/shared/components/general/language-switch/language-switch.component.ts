import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Locale } from '../../../../core/types/locale';

@Component({
  selector: 'tq-language-switch',
  templateUrl: './language-switch.component.html',
  styleUrls: ['./language-switch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitchComponent implements OnInit, OnDestroy {
  LOCALES = Object.values(Locale);
  currentLang?: string;

  langSub$: Subscription = Subscription.EMPTY;

  constructor(
    private translateService: TranslateService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.currentLang = this.translateService.currentLang;

    this.langSub$ = this.translateService.onLangChange?.subscribe((event) => {
      this.currentLang = event.lang;
      this.cdRef.markForCheck();
    });
  }

  setLanguage(lang: string) {
    if (this.LOCALES.includes(lang as Locale)) this.translateService.use(lang);
  }

  ngOnDestroy(): void {
    this.langSub$?.unsubscribe();
  }
}
