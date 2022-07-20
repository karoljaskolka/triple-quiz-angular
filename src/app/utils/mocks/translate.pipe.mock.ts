// @ts-nocheck
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate',
})
export class TranslateMockPipe implements PipeTransform {
  public transform(message: string, ...args: any[]): any {
    return message;
  }
}
