import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslationComponent } from './translation/translation.component';
import { ContainerComponent } from './container/container.component';
import { SpinnerComponent } from './spinner/spinner.component';

const COMPONENTS = [TranslationComponent, ContainerComponent, SpinnerComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule],
  exports: [COMPONENTS],
})
export class SharedComponentsModule {}
