import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hidePassword'
})
export class HidePasswordPipe implements PipeTransform {

  transform(value: string): string {
    if (!value || value.length <= 3) {
      return value;
    }

    const visiblePart = value.slice(-3);
    const maskedPart = '*'.repeat(value.length - 3); // Mask remaining characters

    return maskedPart + visiblePart;
  }
}
