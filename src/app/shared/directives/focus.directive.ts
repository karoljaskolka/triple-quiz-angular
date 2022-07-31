import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[tqFocus]',
})
export class FocusDirective implements AfterViewInit {
  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.elRef.nativeElement.focus();
  }
}
