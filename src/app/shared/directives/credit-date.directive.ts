import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[creditDate]'
})
export class CreditDateDirective {
  target;

  constructor(el: ElementRef) {
    this.target = el.nativeElement;
   }

   @HostListener('input', ['$event']) onInput(e) {
    if (!this.target.value) {return;}

    this.target.value = this.formatNumber(this.target.value);
  }

  private formatNumber(creditDate: string) {
    const monthAndYear = creditDate.match(/[0-9]{1,2} \/ [0-9]{1,4}/g);
    if (monthAndYear) {
      return monthAndYear[0];
    }

    if (/[0-9]{1,2} \//g.test(creditDate)) {
      return (creditDate.length === 4) ? creditDate.substring(0,2) : creditDate.substring(0,2) + ' / ';
    } 

    const month = creditDate.match(/[0-9]{1,2}/g);
    return (!month) ? '' : (month[0].length > 1) ? month[0] + ' / ' : month[0];
  }
}
