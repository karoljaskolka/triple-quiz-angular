import {
  ChangeDetectorRef,
  Directive,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { startWith, Subscription } from 'rxjs';
import { TokenService } from '../../core/services';

@Directive({
  selector: '[tqAuthenticated]',
})
export class AuthenticatedDirective implements OnInit, OnDestroy {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private tokenService: TokenService,
    private cdRef: ChangeDetectorRef
  ) {}

  tokenSub$: Subscription = Subscription.EMPTY;

  ngOnInit() {
    this.tokenSub$ = this.tokenService.tokenChange$
      .pipe(startWith(null))
      .subscribe(() => {
        this.updateView();
      });
  }

  updateView() {
    if (this.tokenService.getToken()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
    this.cdRef.markForCheck();
  }

  ngOnDestroy() {
    this.tokenSub$?.unsubscribe();
  }
}
