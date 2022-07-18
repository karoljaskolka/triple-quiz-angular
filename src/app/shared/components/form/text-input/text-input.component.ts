import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  Input,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'tq-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true,
    },
  ],
})
export class TextInputComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() mandatory: boolean = false;
  @Input() type: 'text' | 'password' = 'text';

  value: string | null = '';

  _onChange: any = () => {};
  _onTouch: any = () => {};

  constructor(private _cdRef: ChangeDetectorRef) {}

  onChange(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this._onChange(this.value);
    this._cdRef.markForCheck();
  }

  onFocus() {
    this._onTouch();
    this._cdRef.markForCheck();
  }

  writeValue(value: string | null): void {
    if (typeof value === 'string' || value === null) {
      this.value = value;
    }
    this._cdRef.markForCheck();
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouch = fn;
  }
}
