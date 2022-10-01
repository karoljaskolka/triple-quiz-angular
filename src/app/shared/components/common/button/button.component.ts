/* eslint-disable @angular-eslint/no-host-metadata-property */
/* eslint-disable @angular-eslint/component-selector */
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Input,
} from '@angular/core';

@Component({
  selector: 'button[tqBtn]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.disabled]': 'disabled || null',
    '[class.rounded-md]': 'true',
    '[class.px-3]': 'true',
    '[class.py-2]': 'true',
    '[class.hover:bg-opacity-75]': '!outline',
    '[class.disabled:bg-opacity-50]': 'true',
    '[class.disabled:cursor-not-allowed]': 'true',
  },
})
export class ButtonComponent implements AfterViewInit {
  @Input() color: 'primary' | 'secondary' | 'complementary' | 'tertiary' =
    'tertiary';
  @Input() text: 'primary' | 'secondary' | 'complementary' | 'tertiary' =
    'primary';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() outline: boolean = false;

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    if (!this.outline) {
      this.elRef.nativeElement.classList.add(`bg-${this.color}`);
      this.elRef.nativeElement.classList.add(`text-${this.text}`);
    } else {
      this.elRef.nativeElement.classList.add(`bg-transparent`);
      this.elRef.nativeElement.classList.add(`text-${this.color}`);
      this.elRef.nativeElement.classList.add(`border-${this.color}`);
      this.elRef.nativeElement.classList.add(`border-2`);
      this.elRef.nativeElement.classList.add(`hover:bg-${this.color}`);
      this.elRef.nativeElement.classList.add(`hover:text-${this.text}`);
    }
  }
}

@Component({
  selector: 'a[tqBtn]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.disabled]': 'disabled || null',
    '[attr.tabindex]': 'disabled ? -1 : (tabIndex || 0)',
  },
})
export class AnchorComponent extends ButtonComponent {
  @Input() tabIndex: number = 0;

  @HostListener('click')
  onClick(event: Event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }
}
