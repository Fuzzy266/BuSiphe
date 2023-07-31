import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zarCurrency'
})
export class ZarCurrencyPipe implements PipeTransform {

  transform(value: number): string {
    // Format the number as ZAR currency
    const formattedValue = value.toFixed(2); // Rounds to 2 decimal places, change as needed
    return `R ${formattedValue}`; // Add the currency symbol 'R' for Rand
  }

}
