import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusDirective } from './focus.directive';

const DIRECTIVES = [FocusDirective];

@NgModule({
  declarations: [DIRECTIVES],
  imports: [CommonModule],
  exports: [DIRECTIVES],
})
export class SharedDirectivesModule {}
