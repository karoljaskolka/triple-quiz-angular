import {
  ChangeDetectorRef,
  Directive,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[tqAuthenticated]',
})
export class AuthenticatedMockDirective implements OnInit {
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
