import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusDirective } from './focus.directive';
import { AuthenticatedDirective } from './authenticated.directive';

const DIRECTIVES = [FocusDirective, AuthenticatedDirective];

@NgModule({
  declarations: [DIRECTIVES],
  imports: [CommonModule],
  exports: [DIRECTIVES],
})
export class SharedDirectivesModule {}
