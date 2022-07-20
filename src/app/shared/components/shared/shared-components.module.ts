import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslationComponent } from './translation/translation.component';
import { ContainerComponent } from './container/container.component';

const COMPONENTS = [TranslationComponent, ContainerComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule],
  exports: [COMPONENTS],
})
export class SharedComponentsModule {}
