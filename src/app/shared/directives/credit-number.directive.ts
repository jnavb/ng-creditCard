import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[creditNumber]'
})
export class CreditNumberDirective {
  target;

  constructor(el: ElementRef) {
    this.target = el.nativeElement;
   }

   @HostListener('input', ['$event']) onInput(e) {
    if (!this.target.value) {return;}

    this.target.value = this.formatNumber(this.target.value);
  }

  private formatNumber(creditNumber: string) {
    return creditNumber.match(/[0-9]{1,4}/g).slice(0, 4).join(' ');
  }
}
