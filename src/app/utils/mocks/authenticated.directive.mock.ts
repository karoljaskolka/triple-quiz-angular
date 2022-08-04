import {
  ChangeDetectorRef,
  Directive,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[tqAuthenticated]',
})
export class AuthenticatedMockDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.viewContainer.createEmbeddedView(this.templateRef);
    this.cdRef.markForCheck();
  }
}
