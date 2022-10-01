import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'tq-host-control-mock',
  template: '',
})
export class HostControlMockComponent {
  control = new FormControl(null);
}
