import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[creditCvv]'
})
export class CreditCvvDirective {
  target;

  constructor(el: ElementRef) {
    this.target = el.nativeElement;
   }

   @HostListener('input', ['$event']) onInput(e) {
    if (!this.target.value) {return;}

    this.target.value = this.formatNumber(this.target.value);
  }

  private formatNumber(creditCvv: string) {
    const cvvFormated = creditCvv.match(/[0-9]{1,3}/g);
    return (cvvFormated) ? cvvFormated[0] : '';
  }
}
