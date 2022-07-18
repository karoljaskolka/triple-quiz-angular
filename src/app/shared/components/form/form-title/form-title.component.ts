import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tq-form-title',
  templateUrl: './form-title.component.html',
  styleUrls: ['./form-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormTitleComponent {}
