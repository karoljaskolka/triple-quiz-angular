import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslationComponent } from './translation/translation.component';
import { ContainerComponent } from './container/container.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { AnchorComponent, ButtonComponent } from './button/button.component';

const COMPONENTS = [
  TranslationComponent,
  ContainerComponent,
  SpinnerComponent,
  ButtonComponent,
  AnchorComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule],
  exports: [COMPONENTS],
})
export class SharedCommonComponentsModule {}
