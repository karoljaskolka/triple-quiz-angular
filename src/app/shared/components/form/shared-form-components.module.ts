import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './text-input/text-input.component';
import { FormTitleComponent } from './form-title/form-title.component';

const COMPONENTS = [TextInputComponent, FormTitleComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule],
  exports: [COMPONENTS],
})
export class SharedFormComponentsModule {}
