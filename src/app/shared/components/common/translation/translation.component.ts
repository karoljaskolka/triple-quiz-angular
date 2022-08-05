import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { startWith, Subscription } from 'rxjs';
import { Locale } from '../../../../core/types/locale';

@Component({
  selector: 'tq-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TranslationComponent implements OnInit, OnDestroy {
  @Input() entity?: { pl: any; en: any };
  @Input() property?: string;

  lang: Locale = this.translateService.defaultLang as Locale;

  langSub$: Subscription = Subscription.EMPTY;

  constructor(
    private translateService: TranslateService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.lang = this.translateService.currentLang as Locale;
    this.langSub$ = this.translateService.onLangChange?.subscribe((event) => {
      this.lang = event.lang as Locale;
      this.cdRef.markForCheck();
    });
  }

  getTranslation(): string {
    if (!this.entity || !this.lang || !this.property) return '';
    return this.entity[this.lang][this.property];
  }

  ngOnDestroy(): void {
    this.langSub$?.unsubscribe();
  }
}
